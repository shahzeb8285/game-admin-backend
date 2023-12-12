import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { Admin } from '../entities/admin.entity';
import { CreateAdminInput } from '../dto/create-admin.input';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { UserEntity } from '../../common/decorators/user.decorator';
import { GqlAuthorizationGuard } from '../../auth/authorization.guard';
import { LoginHistory } from '../entities/loginhistory.entity';

@Resolver(() => Admin)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) { }

  @Mutation(() => Admin)
  createAdmin(@UserEntity() user: Admin, @Args('data') createAdminInput: CreateAdminInput) {
    return this.adminsService.create(createAdminInput,user.admin_name);
  }

  @Query(() => [Admin], { name: 'admins' })
  getAdmins() {
    return this.adminsService.findAll();
  }

  @Mutation(() => Admin)
  updateAdmin(@Args('data') updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(updateAdminInput.adminID, updateAdminInput);
  }

  @Query(() => [LoginHistory], { name: 'loginhistory' })
  getAdminsLoginHistory() {
    return this.adminsService.findAllLoginHistory();
  }

  

}
