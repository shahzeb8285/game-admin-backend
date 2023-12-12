import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { agents } from '../agents/agents.model';
import { player_login_logs } from '../player-login-logs/player-login-logs.model';
import { current_active_players } from '../current-active-players/current-active-players.model';
import { game_history } from '../game-history/game-history.model';
import { manual_adjustments } from '../manual-adjustments/manual-adjustments.model';
import { player_wallets } from '../player-wallets/player-wallets.model';
import { wallet_requests } from '../wallet-requests/wallet-requests.model';
import { deposit_transactions } from '../deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from '../withdrawal-transactions/withdrawal-transactions.model';
import { transfer_in_transactions } from '../transfer-in-transactions/transfer-in-transactions.model';
import { transfer_out_transactions } from '../transfer-out-transactions/transfer-out-transactions.model';
import { PlayersCount } from '../prisma/players-count.output';

@ObjectType()
export class players {

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

    @Field(() => agents, {nullable:false})
    agent?: agents;

    @Field(() => [player_login_logs], {nullable:true})
    player_login_logs?: Array<player_login_logs>;

    @Field(() => [current_active_players], {nullable:true})
    current_active_players?: Array<current_active_players>;

    @Field(() => [game_history], {nullable:true})
    game_history?: Array<game_history>;

    @Field(() => [manual_adjustments], {nullable:true})
    manual_adjustments?: Array<manual_adjustments>;

    @Field(() => [player_wallets], {nullable:true})
    player_wallets?: Array<player_wallets>;

    @Field(() => [wallet_requests], {nullable:true})
    wallet_requests?: Array<wallet_requests>;

    @Field(() => [deposit_transactions], {nullable:true})
    deposit_transactions?: Array<deposit_transactions>;

    @Field(() => [withdrawal_transactions], {nullable:true})
    withdrawal_transactions?: Array<withdrawal_transactions>;

    @Field(() => [transfer_in_transactions], {nullable:true})
    transfer_in_transactions?: Array<transfer_in_transactions>;

    @Field(() => [transfer_out_transactions], {nullable:true})
    transfer_out_transactions?: Array<transfer_out_transactions>;

    @Field(() => PlayersCount, {nullable:false})
    _count?: PlayersCount;
}
