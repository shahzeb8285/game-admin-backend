import { Resolver, Query, Mutation, Args, Int, Info } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { CreateAdminInput } from '../dto/create-admin.input';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { UserEntity } from '../../common/decorators/user.decorator';
import { GqlAuthorizationGuard } from '../../auth/authorization.guard';
import { admins as Admin } from '../../@generated/admins/admins.model';
import { adminsWhereInput as AdminWhereInput } from '../../@generated/admins/admins-where.input';
import { admin_login_logsWhereInput as AdminLoginLogWhereInput } from '../../@generated/admin-login-logs/admin-login-logs-where.input';
import { admin_login_logs } from 'src/@generated/admin-login-logs/admin-login-logs.model';
import { adminsOrderByWithAggregationInput } from 'src/@generated/admins/admins-order-by-with-aggregation.input';
import { admin_login_logsOrderByWithAggregationInput } from 'src/@generated/admin-login-logs/admin-login-logs-order-by-with-aggregation.input';

@Resolver(() => Admin)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Mutation(() => Admin)
  createAdmin(
    @UserEntity() user: Admin,
    @Args('data') createAdminInput: CreateAdminInput,
  ) {
    return this.adminsService.create(createAdminInput, user.admin_id);
  }

  @Query(() => [Admin], { name: 'admins' })
  getAdmins(
    @Args({ name: 'where', defaultValue: {} }) where: AdminWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) order: adminsOrderByWithAggregationInput,

  ) {
    return this.adminsService.findAll({
      take,
      skip,
      where,
      order
    });
  }

  @Mutation(() => Admin)
  updateAdmin(@Args('data') updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(
      updateAdminInput.admin_id,
      updateAdminInput,
    );
  }

  @Query(() => [admin_login_logs])
  getAdminsLoginHistory(
    @Args({ name: 'where', defaultValue: {} })
    where: AdminLoginLogWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} }) order: admin_login_logsOrderByWithAggregationInput,

  ) {
    return this.adminsService.findAllLoginHistory({ skip, take, where,order });
  }
}
