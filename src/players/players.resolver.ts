import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlayersService } from './players.service';
// import { Player } from './entities/player.entity';
import { UpdatePlayerInput } from './dto/update-player.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserLoginHistory } from './entities/loginhistory.entity';
// import { ManualAdjustment } from './entities/manualadjustment.entity';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';
// import { Admin } from '../admins/entities/admin.entity';
import { UserEntity } from '../common/decorators/user.decorator';
import { Admin } from '../@generated/admin/admin.model';
import { Player } from '../@generated/player/player.model';
import { ManualAdjustment } from '../@generated/manual-adjustment/manual-adjustment.model';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
@Resolver(() => Player)
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) { }

  @Query(() => [Player], { name: 'players' })
  getUsers(
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
  @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number
  ) {
    return this.playersService.findAll({skip,take});
  }


  @Query(() => [UserLoginHistory])
  getUserLoginHistory(
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
  @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number
  ) {
    return this.playersService.getUserLoginHistory({skip,take});
  }


  @Query(() => [ManualAdjustment], { name: 'manualadjustments' })
  getManualAdjustments(
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
  @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number
  ) {
    return this.playersService.getManualAdjustments({skip,take});
  }



  @Query(() => [Player])
  getUsersBonusHistory(
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
  @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number
  ) {
    return this.playersService.findAll({skip,take});
  }


  @Mutation(() => Player)
  updateUser(@Args('data') input: UpdatePlayerInput) {
    return this.playersService.changePlayerStatus(input);
  }


  @Mutation(() => ManualAdjustment)
  createManualAdjustment(@UserEntity() user: Admin, @Args('data') input: CreateManualAdjustment) {
    return this.playersService.createManualAdjustment(user.admin_id, input);
  }

}
