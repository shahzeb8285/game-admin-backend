// agent-auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AgentAuthService } from './agent-auth.service';
import { AgentAuthResolver } from './agent-auth.resolver';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from 'src/auth/password.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/common/configs/config.interface';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    AgentAuthService,
    AgentAuthResolver,
    PrismaService,
    PasswordService,
  ],
})
export class AgentAuthModule {}
