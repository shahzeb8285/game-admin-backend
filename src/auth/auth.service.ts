import { PrismaService } from 'nestjs-prisma';
import { Prisma, admins as Admin } from '@prisma/client';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { Token } from './models/token.model';
import { SecurityConfig } from '../common/configs/config.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
  ) {}

  async login(
    admin_name: string,
    password: string,
    ip: string,
  ): Promise<Token> {
    const admin = await this.prisma.admins.findUnique({
      where: { admin_name },
    });

    if (!admin) {
      throw new NotFoundException(
        `No admin found for adminName: ${admin_name}`,
      );
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      admin.admin_password,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    if (!admin.enabled) {
      throw new BadRequestException('Admin Not Enabled');
    }
    await this.prisma.admin_login_logs.create({
      data: {
        ip,
        admins: {
          connect: {
            admin_id: admin.admin_id,
          },
        },
        // loginTime:
      },
    });
    return this.generateTokens({
      adminId: admin.admin_id,
      roleId: admin.admin_role_id,
    });
  }

  validateUser(admin_id: string): Promise<Admin> {
    return this.prisma.admins.findUnique({
      where: { admin_id },
      include: {
        admin_roles: {
          include: {
            admin_role_accesses: {
              include: {
                admin_accesses: true,
              },
            },
          },
        },
      },
    });
  }

  getUserFromToken(token: string): Promise<Admin> {
    const admin_id = this.jwtService.decode(token)['userId'];
    return this.prisma.admins.findUnique({
      where: { admin_id },
      include: {
        admin_roles: {
          include: {
            admin_role_accesses: {
              include: {
                admin_accesses: true,
              },
            },
          },
        },
      },
    });
  }

  generateTokens(payload: { adminId: string; roleId: string }): Token {
    return {
      access_token: this.generateAccessToken(payload),
      refresh_token: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { adminId: string }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { adminId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  refreshToken(token: string) {
    try {
      const { adminId, roleId } = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      return this.generateTokens({
        adminId,
        roleId,
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
