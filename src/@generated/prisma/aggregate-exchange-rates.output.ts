import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Exchange_ratesCountAggregate } from './exchange-rates-count-aggregate.output';
import { Exchange_ratesAvgAggregate } from './exchange-rates-avg-aggregate.output';
import { Exchange_ratesSumAggregate } from './exchange-rates-sum-aggregate.output';
import { Exchange_ratesMinAggregate } from './exchange-rates-min-aggregate.output';
import { Exchange_ratesMaxAggregate } from './exchange-rates-max-aggregate.output';

@ObjectType()
export class AggregateExchange_rates {

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
