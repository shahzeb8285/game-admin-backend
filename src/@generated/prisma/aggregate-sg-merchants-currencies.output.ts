import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Sg_merchants_currenciesCountAggregate } from './sg-merchants-currencies-count-aggregate.output';
import { Sg_merchants_currenciesAvgAggregate } from './sg-merchants-currencies-avg-aggregate.output';
import { Sg_merchants_currenciesSumAggregate } from './sg-merchants-currencies-sum-aggregate.output';
import { Sg_merchants_currenciesMinAggregate } from './sg-merchants-currencies-min-aggregate.output';
import { Sg_merchants_currenciesMaxAggregate } from './sg-merchants-currencies-max-aggregate.output';

@ObjectType()
export class AggregateSg_merchants_currencies {

    @Field(() => Sg_merchants_currenciesCountAggregate, {nullable:true})
    _count?: Sg_merchants_currenciesCountAggregate;

    @Field(() => Sg_merchants_currenciesAvgAggregate, {nullable:true})
    _avg?: Sg_merchants_currenciesAvgAggregate;

    @Field(() => Sg_merchants_currenciesSumAggregate, {nullable:true})
    _sum?: Sg_merchants_currenciesSumAggregate;

    @Field(() => Sg_merchants_currenciesMinAggregate, {nullable:true})
    _min?: Sg_merchants_currenciesMinAggregate;

    @Field(() => Sg_merchants_currenciesMaxAggregate, {nullable:true})
    _max?: Sg_merchants_currenciesMaxAggregate;
}
