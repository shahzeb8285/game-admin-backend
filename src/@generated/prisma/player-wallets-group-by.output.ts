import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';
import { Float } from '@nestjs/graphql';
import { Player_walletsCountAggregate } from './player-wallets-count-aggregate.output';
import { Player_walletsAvgAggregate } from './player-wallets-avg-aggregate.output';
import { Player_walletsSumAggregate } from './player-wallets-sum-aggregate.output';
import { Player_walletsMinAggregate } from './player-wallets-min-aggregate.output';
import { Player_walletsMaxAggregate } from './player-wallets-max-aggregate.output';

@ObjectType()
export class Player_walletsGroupBy {

    @Field(() => String, {nullable:false})
    player_wallet_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => game_currency, {nullable:false})
    currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    frozen_amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Player_walletsCountAggregate, {nullable:true})
    _count?: Player_walletsCountAggregate;

    @Field(() => Player_walletsAvgAggregate, {nullable:true})
    _avg?: Player_walletsAvgAggregate;

    @Field(() => Player_walletsSumAggregate, {nullable:true})
    _sum?: Player_walletsSumAggregate;

    @Field(() => Player_walletsMinAggregate, {nullable:true})
    _min?: Player_walletsMinAggregate;

    @Field(() => Player_walletsMaxAggregate, {nullable:true})
    _max?: Player_walletsMaxAggregate;
}
