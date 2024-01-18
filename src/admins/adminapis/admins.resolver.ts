import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { Admin } from '../entities/admin.entity';
import { CreateAdminInput } from '../dto/create-admin.input';
import { UpdateAdminInput } from '../dto/update-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/gql-auth.guard';
import { UserEntity } from '../../common/decorators/user.decorator';
import { GqlAuthorizationGuard } from '../../auth/authorization.guard';
import { LoginHistory } from '../entities/loginhistory.entity';
// import { PaginateFunction, paginator } from '../../paginator';
import { Prisma } from '@prisma/client';
import { PaginationParamsDto } from '../../paginator.dto';
import { AdminsWhereInput } from '../../@generated/admins/admins-where.input';

// const paginate: PaginateFunction = paginator({ perPage: 10 });

@Resolver(() => Admin)
@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) { }

  @Mutation(() => Admin)
  createAdmin(@UserEntity() user: Admin, @Args('data') createAdminInput: CreateAdminInput) {
    return this.adminsService.create(createAdminInput, user.admin_name);
  }

  @Query(() => [Admin], { name: 'admins' })
  getAdmins(@Args({ name: 'take', type: () => Int, defaultValue: 5000 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args('where') where: AdminsWhereInput,

  ) {

    console.log("Sasasasasas",where)
    return this.adminsService.findAll({
      take,
      skip
    });
  }

  @Mutation(() => Admin)
  updateAdmin(@Args('data') updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(updateAdminInput.admin_id, updateAdminInput);
  }

  @Query(() => [LoginHistory])
  getAdminsLoginHistory() {
    return this.adminsService.findAllLoginHistory();
  }



}
