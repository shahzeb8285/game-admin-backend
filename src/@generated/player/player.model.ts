import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Agent } from '../agent/agent.model';
import { PlayerLoginLog } from '../player-login-log/player-login-log.model';
import { CurrentActivePlayers } from '../current-active-players/current-active-players.model';
import { GameHistory } from '../game-history/game-history.model';
import { ManualAdjustment } from '../manual-adjustment/manual-adjustment.model';
import { PlayerWallet } from '../player-wallet/player-wallet.model';
import { WalletRequest } from '../wallet-request/wallet-request.model';
import { DepositTransaction } from '../deposit-transaction/deposit-transaction.model';
import { WithdrawalTransaction } from '../withdrawal-transaction/withdrawal-transaction.model';
import { TransferInTransaction } from '../transfer-in-transaction/transfer-in-transaction.model';
import { TransferOutTransaction } from '../transfer-out-transaction/transfer-out-transaction.model';

@ObjectType()
export class Player {

    @Field(() => ID, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    tg_id!: string;

    @Field(() => String, {nullable:false})
    tg_first_name!: string;

    @Field(() => String, {nullable:false})
    tg_last_name!: string;

    @Field(() => String, {nullable:false})
    tg_user_name!: string;

    @Field(() => String, {nullable:false})
    tg_photo_url!: string;

    @Field(() => String, {nullable:false})
    user_language!: string;

    @Field(() => String, {nullable:false})
    registration_ip!: string;

    @Field(() => String, {nullable:false})
    agent_id_r!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => Agent, {nullable:false})
    agent?: Agent;

    @Field(() => [PlayerLoginLog], {nullable:true})
    player_login_logs?: Array<PlayerLoginLog>;

    @Field(() => [CurrentActivePlayers], {nullable:true})
    current_active_players?: Array<CurrentActivePlayers>;

    @Field(() => [GameHistory], {nullable:true})
    game_history?: Array<GameHistory>;

    @Field(() => [ManualAdjustment], {nullable:true})
    manual_adjustments?: Array<ManualAdjustment>;

    @Field(() => [PlayerWallet], {nullable:true})
    player_wallets?: Array<PlayerWallet>;

    @Field(() => [WalletRequest], {nullable:true})
    wallet_requests?: Array<WalletRequest>;

    @Field(() => [DepositTransaction], {nullable:true})
    deposit_transactions?: Array<DepositTransaction>;

    @Field(() => [WithdrawalTransaction], {nullable:true})
    withdrawal_transactions?: Array<WithdrawalTransaction>;

    @Field(() => [TransferInTransaction], {nullable:true})
    transfer_in_transactions?: Array<TransferInTransaction>;

    @Field(() => [TransferOutTransaction], {nullable:true})
    transfer_out_transactions?: Array<TransferOutTransaction>;
}
