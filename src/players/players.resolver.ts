import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';
import { UpdatePlayerInput } from './dto/update-player.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserLoginHistory } from './entities/loginhistory.entity';
import { ManualAdjustment } from './entities/manualadjustment.entity';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';
import { Admin } from '../admins/entities/admin.entity';
import { UserEntity } from '../common/decorators/user.decorator';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
@Resolver(() => Player)
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) { }

  @Query(() => [Player], { name: 'users' })
  getUsers() {
    return this.playersService.findAll();
  }


  @Query(() => [UserLoginHistory])
  getUserLoginHistory() {
    return this.playersService.getUserLoginHistory();
  }


  @Query(() => [ManualAdjustment], { name: 'manualadjustments' })
  getManualAdjustments() {
    return this.playersService.getManualAdjustments();
  }



  @Query(() => [Player], { name: 'users' })
  getUsersBonusHistory() {
    return this.playersService.findAll();
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
