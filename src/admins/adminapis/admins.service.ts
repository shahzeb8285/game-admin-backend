import { Injectable } from '@nestjs/common';
import { CreateAdminInput } from '../dto/create-admin.input';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../../auth/password.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AdminsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  async create(createAdminInput: CreateAdminInput, created_by: string) {
    const hashedPassword = await this.passwordService.hashPassword(
      createAdminInput.admin_password,
    );
    const payload = { ...createAdminInput };
    const adminRolesId = payload.admin_roles_id;
    delete payload.admin_roles_id;
    return this.prisma.admins.create({
      data: {
        ...payload,
        created_by,
        admin_name: payload.admin_name.toLowerCase(),
        admin_password: hashedPassword,
        admin_roles: {
          connect: {
            admin_role_id: adminRolesId.toString(),
          },
        },
      },
    });
  }

  findAll({ skip, take, where,order }) {
    return this.prisma.admins.findMany({
      take,
      skip,
      where,
      orderBy: order,
      include: {
        admin_roles: {
          include: {
            admin_role_accesses: true,
          },
        },
      },
    });
  }

  getAdminCounts() {
    return this.prisma.admins.count();
  }

  async update(admin_id: string, updateAdminInput: UpdateAdminInput) {
    const updatePayload: any = {
      ...updateAdminInput,
    };

    if (updatePayload.admin_password) {
      updatePayload.admin_password = await this.passwordService.hashPassword(
        updatePayload.admin_password,
      );
    }

    delete updatePayload.admin_id;

    return this.prisma.admins.update({
      where: {
        admin_id,
      },
      data: updatePayload,
    });
  }

  async findAllLoginHistory({ skip, take, where,order }) {
    return this.prisma.admin_login_logs.findMany({
      skip,
      orderBy: order,
      take,
      where,
      include: {
        admins: true,
      },
    });
  }
}
