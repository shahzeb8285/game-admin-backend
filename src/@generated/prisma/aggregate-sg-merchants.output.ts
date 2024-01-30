import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Sg_merchantsCountAggregate } from './sg-merchants-count-aggregate.output';
import { Sg_merchantsAvgAggregate } from './sg-merchants-avg-aggregate.output';
import { Sg_merchantsSumAggregate } from './sg-merchants-sum-aggregate.output';
import { Sg_merchantsMinAggregate } from './sg-merchants-min-aggregate.output';
import { Sg_merchantsMaxAggregate } from './sg-merchants-max-aggregate.output';

@ObjectType()
export class AggregateSg_merchants {

    @Field(() => Sg_merchantsCountAggregate, {nullable:true})
    _count?: Sg_merchantsCountAggregate;

    @Field(() => Sg_merchantsAvgAggregate, {nullable:true})
    _avg?: Sg_merchantsAvgAggregate;

    @Field(() => Sg_merchantsSumAggregate, {nullable:true})
    _sum?: Sg_merchantsSumAggregate;

    @Field(() => Sg_merchantsMinAggregate, {nullable:true})
    _min?: Sg_merchantsMinAggregate;

    @Field(() => Sg_merchantsMaxAggregate, {nullable:true})
    _max?: Sg_merchantsMaxAggregate;
}
