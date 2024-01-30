import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Categories_mappingsCountAggregate } from './categories-mappings-count-aggregate.output';
import { Categories_mappingsAvgAggregate } from './categories-mappings-avg-aggregate.output';
import { Categories_mappingsSumAggregate } from './categories-mappings-sum-aggregate.output';
import { Categories_mappingsMinAggregate } from './categories-mappings-min-aggregate.output';
import { Categories_mappingsMaxAggregate } from './categories-mappings-max-aggregate.output';

@ObjectType()
export class AggregateCategories_mappings {

    @Field(() => Categories_mappingsCountAggregate, {nullable:true})
    _count?: Categories_mappingsCountAggregate;

    @Field(() => Categories_mappingsAvgAggregate, {nullable:true})
    _avg?: Categories_mappingsAvgAggregate;

    @Field(() => Categories_mappingsSumAggregate, {nullable:true})
    _sum?: Categories_mappingsSumAggregate;

    @Field(() => Categories_mappingsMinAggregate, {nullable:true})
    _min?: Categories_mappingsMinAggregate;

    @Field(() => Categories_mappingsMaxAggregate, {nullable:true})
    _max?: Categories_mappingsMaxAggregate;
}
