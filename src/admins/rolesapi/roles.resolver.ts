import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoleService } from './roles.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { GqlAuthorizationGuard } from '../../auth/authorization.guard';
import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';
import { admins as Admin } from '../../@generated/admins/admins.model';
import { admin_accesses as AdminAccesses } from '../../@generated/admin-accesses/admin-accesses.model';
import { admin_rolesWhereInput as AdminRoleWhereInput } from '../../@generated/admin-roles/admin-roles-where.input';
import { admin_accessesWhereInput as AdminAccessesWhereInput } from '../../@generated/admin-accesses/admin-accesses-where.input';
import { admin_roles } from 'src/@generated/admin-roles/admin-roles.model';
import { UserEntity } from 'src/common/decorators/user.decorator';

@Resolver(() => Admin)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class RolesResolver {
  constructor(private readonly rolesService: RoleService) {}

  @Mutation(() => admin_roles)
  createAdminRole(
    @UserEntity() user: Admin,

    @Args('data') input: CreateRoleInput,
  ) {
    return this.rolesService.create(input, user.admin_id);
  }

  @Query(() => [admin_roles])
  async getAdminsRoles(
    @Args({ name: 'where', defaultValue: {} }) where: AdminRoleWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    const roles = await this.rolesService.findAll({ skip, take, where });

    const finalRoles = roles.map((role) => {
      return {
        ...role,
        admin_accesses: role.admin_role_accesses.map((item) => {
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

  @Mutation(() => admin_roles)
  async updateAdminRole(
    @UserEntity() user: Admin,
    @Args('data') input: UpdateRoleInput,
  ) {
    const role = await this.rolesService.update(
      user.admin_id,
      input.admin_role_id,
      input,
    );
    return {
      ...role,
      admin_accesses: role.admin_role_accesses.map((item) => {
        return item.admin_accesses;
      }),
    };
  }
}
