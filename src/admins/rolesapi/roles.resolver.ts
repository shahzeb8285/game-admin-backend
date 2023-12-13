import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoleService } from './roles.service';
import { Admin, AdminAccesses, AdminRoles } from '../entities/admin.entity';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { GqlAuthorizationGuard } from '../../auth/authorization.guard';
import { CreateRoleInput } from '../dto/create-role.input';
import { UpdateRoleInput } from '../dto/update-role.input';

@Resolver(() => Admin)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class RolesResolver {
  constructor(private readonly rolesService: RoleService) { }

  @Mutation(() => AdminRoles)
  createAdminRole( @Args('data') input: CreateRoleInput) {
    return this.rolesService.create(input);

  }

  @Query(() => [AdminRoles], { name: 'roles' })
  async getAdminsRoles() {
    const roles = await this.rolesService.findAll();
    const finalRoles = roles.map((role) => {
      return {
        ...role,
        admin_accesses: role.role_accesses.map((item) => {
          return item.admin_accesses
        })
      }
    })
    
    return finalRoles
  }

  @Query(() => [AdminAccesses], { name: 'accesses' })
  getAccesses() {
    return this.rolesService.findAllAccess();
  }

  

  @Mutation(() => AdminRoles)
  async updateAdminRole(@Args('data') input: UpdateRoleInput) {
    const role = await this.rolesService.update(input.added_roles_ids.toString(), input);
    return {
      ...role,
      admin_accesses: role.role_accesses.map((item) => {
        return item.admin_accesses
      })
    }
  }

}
