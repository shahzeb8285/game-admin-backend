import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoleService } from './roles.service';
import { AdminRoles } from '../entities/admin.entity';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { GqlAuthorizationGuard } from '../../auth/authorization.guard';
import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';
import { Admin } from '../../@generated/admin/admin.model';
import { AdminAccesses } from '../../@generated/admin-accesses/admin-accesses.model';
import { AdminRoleWhereInput } from '../../@generated/admin-role/admin-role-where.input';
import { AdminAccessesWhereInput } from '../../@generated/admin-accesses/admin-accesses-where.input';

@Resolver(() => Admin)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class RolesResolver {
  constructor(private readonly rolesService: RoleService) {}

  @Mutation(() => AdminRoles)
  createAdminRole(@Args('data') input: CreateRoleInput) {
    return this.rolesService.create(input);
  }

  @Query(() => [AdminRoles])
  async getAdminsRoles(
    @Args({ name: 'where', defaultValue: {} }) where: AdminRoleWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    const roles = await this.rolesService.findAll({ skip, take, where });
    const finalRoles = roles.map((role) => {
      return {
        ...role,
        admin_accesses: role.role_accesses.map((item) => {
          return item.admin_accesses;
        }),
      };
    });

    return finalRoles;
  }

  @Query(() => [AdminAccesses])
  getAccesses(
    @Args({ name: 'where', defaultValue: {} }) where: AdminAccessesWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.rolesService.findAllAccess({ skip, take, where });
  }

  @Mutation(() => AdminRoles)
  async updateAdminRole(@Args('data') input: UpdateRoleInput) {
    const role = await this.rolesService.update(input.admin_role_id, input);
    return {
      ...role,
      admin_accesses: role.role_accesses.map((item) => {
        return item.admin_accesses;
      }),
    };
  }
}
