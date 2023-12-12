import { Module } from '@nestjs/common';
import { AdminsService } from './adminapis/admins.service';
import { AdminsResolver } from './adminapis/admins.resolver';
import { PasswordService } from '../auth/password.service';
import { RolesResolver } from './rolesapi/roles.resolver';
import { RoleService } from './rolesapi/roles.service';

@Module({
  providers: [AdminsResolver, AdminsService,PasswordService,RolesResolver,RoleService]
})
export class AdminsModule {}
