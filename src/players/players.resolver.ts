import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlayersService } from './players.service';
// import { Player } from './entities/player.entity';
import { UpdatePlayerInput } from './dto/update-player.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
// import { UserLoginHistory } from './entities/loginhistory.entity';
// import { ManualAdjustment } from './entities/manualadjustment.entity';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';
// import { Admin } from '../admins/entities/admin.entity';
import { UserEntity } from '../common/decorators/user.decorator';
import { admins as Admin } from '../@generated/admins/admins.model';
import { players as Player } from '../@generated/players/players.model';
import { manual_adjustments as ManualAdjustment } from '../@generated/manual-adjustments/manual-adjustments.model';
import { playersWhereInput as PlayerWhereInput } from 'src/@generated/players/players-where.input';
import { player_login_logsWhereInput as PlayerLoginLogWhereInput } from 'src/@generated/player-login-logs/player-login-logs-where.input';
import { manual_adjustmentsWhereInput as ManualAdjustmentWhereInput } from 'src/@generated/manual-adjustments/manual-adjustments-where.input';
import { player_login_logs } from 'src/@generated/player-login-logs/player-login-logs.model';
import { game_record_rounds } from 'src/@generated/game-record-rounds/game-record-rounds.model';
import { game_record_roundsWhereInput } from 'src/@generated/game-record-rounds/game-record-rounds-where.input';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
@Resolver(() => Player)
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) {}

  @Query(() => [Player], { name: 'players' })
  getUsers(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.playersService.findAll({ skip, take, where });
  }

  @Query(() => [player_login_logs])
  getUserLoginHistory(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerLoginLogWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.playersService.getUserLoginHistory({ skip, take, where });
  }

  @Query(() => [game_record_rounds])
  getUsersGameHistory(
    @Args({ name: 'where', defaultValue: {} })
    where: game_record_roundsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.playersService.getUsersGameHistory({ skip, take, where });
  }

  @Query(() => [ManualAdjustment], { name: 'manualadjustments' })
  getManualAdjustments(
    @Args({ name: 'where', defaultValue: {} })
    where: ManualAdjustmentWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.playersService.getManualAdjustments({ skip, take, where });
  }

  @Query(() => [Player])
  getUsersBonusHistory(
    @Args({ name: 'where', defaultValue: {} })
    where: ManualAdjustmentWhereInput,
    //todo no generated type for this
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.playersService.findAll({ skip, take, where });
  }

  @Mutation(() => Player)
  updateUser(@Args('data') input: UpdatePlayerInput) {
    return this.playersService.changePlayerStatus(input);
  }

  @Mutation(() => ManualAdjustment)
  createManualAdjustment(
    @UserEntity() user: Admin,
    @Args('data') input: CreateManualAdjustment,
  ) {
    return this.playersService.createManualAdjustment(user.admin_id, input);
  }
}
