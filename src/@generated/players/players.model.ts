import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { agents } from '../agents/agents.model';
import { deposit_transactions } from '../deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from '../withdrawal-transactions/withdrawal-transactions.model';
import { player_login_logs } from '../player-login-logs/player-login-logs.model';
import { manual_adjustments } from '../manual-adjustments/manual-adjustments.model';
import { player_rebate_rates } from '../player-rebate-rates/player-rebate-rates.model';
import { game_records_by_period } from '../game-records-by-period/game-records-by-period.model';
import { game_records_by_day } from '../game-records-by-day/game-records-by-day.model';
import { agent_records_by_day } from '../agent-records-by-day/agent-records-by-day.model';
import { player_bank_accounts } from '../player-bank-accounts/player-bank-accounts.model';
import { player_wallets } from '../player-wallets/player-wallets.model';
import { transfer_in_transactions } from '../transfer-in-transactions/transfer-in-transactions.model';
import { transfer_out_transactions } from '../transfer-out-transactions/transfer-out-transactions.model';
import { wallet_requests } from '../wallet-requests/wallet-requests.model';
import { game_round_infos } from '../game-round-infos/game-round-infos.model';
import { game_record_rounds } from '../game-record-rounds/game-record-rounds.model';
import { PlayersCount } from '../prisma/players-count.output';

@ObjectType()
export class players {

    @Field(() => ID, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false})
    tg_id!: string;

    @Field(() => String, {nullable:false})
    tg_first_name!: string;

    @Field(() => String, {nullable:false})
    tg_last_name!: string;

    @Field(() => String, {nullable:false})
    tg_username!: string;

    @Field(() => String, {nullable:true})
    tg_photo_url!: string | null;

    @Field(() => String, {nullable:false})
    user_language!: string;

    @Field(() => String, {nullable:false})
    registration_ip!: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    fundist_password!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => agents, {nullable:false})
    agent?: agents;

    @Field(() => [deposit_transactions], {nullable:true})
    deposit_transactions?: Array<deposit_transactions>;

    @Field(() => [withdrawal_transactions], {nullable:true})
    withdrawal_transactions?: Array<withdrawal_transactions>;

    @Field(() => [player_login_logs], {nullable:true})
    player_login_logs?: Array<player_login_logs>;

    @Field(() => [manual_adjustments], {nullable:true})
    manual_adjustments?: Array<manual_adjustments>;

    @Field(() => [player_rebate_rates], {nullable:true})
    player_rebate_rates?: Array<player_rebate_rates>;

    @Field(() => [game_records_by_period], {nullable:true})
    game_records_by_period?: Array<game_records_by_period>;

    @Field(() => [game_records_by_day], {nullable:true})
    game_records_by_day?: Array<game_records_by_day>;

    @Field(() => [agent_records_by_day], {nullable:true})
    agent_records_by_day?: Array<agent_records_by_day>;

    @Field(() => [player_bank_accounts], {nullable:true})
    player_bank_accounts?: Array<player_bank_accounts>;

    @Field(() => [player_wallets], {nullable:true})
    player_wallets?: Array<player_wallets>;

    @Field(() => [transfer_in_transactions], {nullable:true})
    transfer_in_transactions?: Array<transfer_in_transactions>;

    @Field(() => [transfer_out_transactions], {nullable:true})
    transfer_out_transactions?: Array<transfer_out_transactions>;

    @Field(() => [wallet_requests], {nullable:true})
    wallet_requests?: Array<wallet_requests>;

    @Field(() => [game_round_infos], {nullable:true})
    game_round_infos?: Array<game_round_infos>;

    @Field(() => [game_record_rounds], {nullable:true})
    game_record_rounds?: Array<game_record_rounds>;

    @Field(() => PlayersCount, {nullable:false})
    _count?: PlayersCount;
}
