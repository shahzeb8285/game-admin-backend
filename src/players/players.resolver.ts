import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlayersService } from './players.service';
// import { Player } from './entities/player.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthorizationGuard } from '../auth/authorization.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UpdatePlayerInput } from './dto/update-player.input';
// import { UserLoginHistory } from './entities/loginhistory.entity';
// import { ManualAdjustment } from './entities/manualadjustment.entity';
import { CreateManualAdjustment } from './dto/create-manual-adjustment.input';
// import { Admin } from '../admins/entities/admin.entity';
import { manual_adjustmentsOrderByWithAggregationInput } from 'src/@generated/manual-adjustments/manual-adjustments-order-by-with-aggregation.input';
import { manual_adjustmentsWhereInput as ManualAdjustmentWhereInput } from 'src/@generated/manual-adjustments/manual-adjustments-where.input';
import { player_login_logsOrderByWithAggregationInput } from 'src/@generated/player-login-logs/player-login-logs-order-by-with-aggregation.input';
import { player_login_logsWhereInput as PlayerLoginLogWhereInput } from 'src/@generated/player-login-logs/player-login-logs-where.input';
import { player_login_logs } from 'src/@generated/player-login-logs/player-login-logs.model';
import { playersOrderByWithAggregationInput } from 'src/@generated/players/players-order-by-with-aggregation.input';
import { playersWhereInput as PlayerWhereInput } from 'src/@generated/players/players-where.input';
import { rebate_transactionsOrderByWithAggregationInput } from 'src/@generated/rebate-transactions/rebate-transactions-order-by-with-aggregation.input';
import { rebate_transactionsWhereInput } from 'src/@generated/rebate-transactions/rebate-transactions-where.input';
import { rebate_transactions } from 'src/@generated/rebate-transactions/rebate-transactions.model';
import { OkResponse } from 'src/common/models/OkResponse.model';
import { admins as Admin } from '../@generated/admins/admins.model';
import { manual_adjustments as ManualAdjustment } from '../@generated/manual-adjustments/manual-adjustments.model';
import { players as Player } from '../@generated/players/players.model';
import { UserEntity } from '../common/decorators/user.decorator';
import { statsAmount } from './dto/amount';
import { statsWhereInput } from './dto/stats';
import { GameRecordRoundsWhereInput } from './entities/game-record-rounds-where.input';
import { UserGameHistory } from './entities/gamehistory.entity';

@UseGuards(GqlAuthGuard, GqlAuthorizationGuard)
@Resolver(() => Player)
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) {}

  @Query(() => [Player], { name: 'players' })
  getUsers(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: playersOrderByWithAggregationInput,
  ) {
    return this.playersService.findAll({ skip, take, where, orderBy });
  }

  @Query(() => [player_login_logs])
  getUserLoginHistory(
    @Args({ name: 'where', defaultValue: {} }) where: PlayerLoginLogWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: player_login_logsOrderByWithAggregationInput,
  ) {
    return this.playersService.getUserLoginHistory({
      skip,
      take,
      where,
      orderBy,
    });
  }

  @Query(() => [ManualAdjustment], { name: 'manualadjustments' })
  getManualAdjustments(
    @Args({ name: 'where', defaultValue: {} })
    where: ManualAdjustmentWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: manual_adjustmentsOrderByWithAggregationInput,
  ) {
    return this.playersService.getManualAdjustments({
      skip,
      take,
      where,
      orderBy,
    });
  }

  @Query(() => [rebate_transactions])
  getUsersBonusHistory(
    @Args({ name: 'where', defaultValue: {} })
    where: rebate_transactionsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
    @Args({ name: 'order', defaultValue: {} })
    orderBy: rebate_transactionsOrderByWithAggregationInput,
  ) {
    return this.playersService.findAllUserBonusHistory({
      skip,
      take,
      where,
      orderBy,
    });
  }

  @Mutation(() => Player)
  updateUser(@Args('data') input: UpdatePlayerInput) {
    return this.playersService.changePlayerStatus(input);
  }

  @Mutation(() => OkResponse)
  createManualAdjustment(
    @UserEntity() user: Admin,
    @Args('data') input: CreateManualAdjustment,
  ) {
    return this.playersService.createManualAdjustment(user.admin_id, input);
  }

  @Query(() => [UserGameHistory])
  getUsersGameHistory(
    @Args({ name: 'where', defaultValue: {} })
    where: GameRecordRoundsWhereInput,
    @Args({ name: 'take', type: () => Int, defaultValue: 10 }) take: number,
    @Args({ name: 'skip', type: () => Int, defaultValue: 0 }) skip: number,
  ) {
    return this.playersService.findAllUserGameHistory({ skip, take, where });
  }

  @Query(() => statsAmount)
  getDepositAmount(
    @Args({ name: 'where', defaultValue: {} })
    where: statsWhereInput,
  ) {
    return this.playersService.getDepositAmount({ where });
  }

  @Query(() => statsAmount)
  getWithdrawalAmount(
    @Args({ name: 'where', defaultValue: {} })
    where: statsWhereInput,
  ) {
    return this.playersService.getWithdrawalAmount({ where });
  }

  @Query(() => statsAmount)
  getBonusAmount(
    @Args({ name: 'where', defaultValue: {} })
    where: statsWhereInput,
  ) {
    return this.playersService.getBonusAmount({ where });
  }
}
