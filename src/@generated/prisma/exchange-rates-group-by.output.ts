import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { game_currency } from './game-currency.enum';
import { Float } from '@nestjs/graphql';
import { Exchange_ratesCountAggregate } from './exchange-rates-count-aggregate.output';
import { Exchange_ratesAvgAggregate } from './exchange-rates-avg-aggregate.output';
import { Exchange_ratesSumAggregate } from './exchange-rates-sum-aggregate.output';
import { Exchange_ratesMinAggregate } from './exchange-rates-min-aggregate.output';
import { Exchange_ratesMaxAggregate } from './exchange-rates-max-aggregate.output';

@ObjectType()
export class Exchange_ratesGroupBy {

    @Field(() => String, {nullable:false})
    exchange_rate_id!: string;

    @Field(() => real_currency, {nullable:false})
    real_currency!: keyof typeof real_currency;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_per_real!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Exchange_ratesCountAggregate, {nullable:true})
    _count?: Exchange_ratesCountAggregate;

    @Field(() => Exchange_ratesAvgAggregate, {nullable:true})
    _avg?: Exchange_ratesAvgAggregate;

    @Field(() => Exchange_ratesSumAggregate, {nullable:true})
    _sum?: Exchange_ratesSumAggregate;

    @Field(() => Exchange_ratesMinAggregate, {nullable:true})
    _min?: Exchange_ratesMinAggregate;

    @Field(() => Exchange_ratesMaxAggregate, {nullable:true})
    _max?: Exchange_ratesMaxAggregate;
}
