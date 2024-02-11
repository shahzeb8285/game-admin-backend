import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { agents } from '../agents/agents.model';
import { deposit_transactions } from '../deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from '../withdrawal-transactions/withdrawal-transactions.model';
import { player_login_logs } from '../player-login-logs/player-login-logs.model';
import { manual_adjustments } from '../manual-adjustments/manual-adjustments.model';
import { rebate_transactions } from '../rebate-transactions/rebate-transactions.model';
import { game_record_rounds } from '../game-record-rounds/game-record-rounds.model';
import { player_wallets } from '../player-wallets/player-wallets.model';
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

    @Field(() => String, {nullable:true})
    tg_username!: string | null;

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

    @Field(() => [rebate_transactions], {nullable:true})
    rebate_transactions?: Array<rebate_transactions>;

    @Field(() => [game_record_rounds], {nullable:true})
    game_record_rounds?: Array<game_record_rounds>;

    @Field(() => player_wallets, {nullable:true})
    wallet?: player_wallets | null;

    @Field(() => PlayersCount, {nullable:false})
    _count?: PlayersCount;
}
