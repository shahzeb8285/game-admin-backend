import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Admin_accessesCountAggregate } from './admin-accesses-count-aggregate.output';
import { Admin_accessesMinAggregate } from './admin-accesses-min-aggregate.output';
import { Admin_accessesMaxAggregate } from './admin-accesses-max-aggregate.output';

@ObjectType()
export class AggregateAdmin_accesses {

    @Field(() => Admin_accessesCountAggregate, {nullable:true})
    _count?: Admin_accessesCountAggregate;

    @Field(() => Admin_accessesMinAggregate, {nullable:true})
    _min?: Admin_accessesMinAggregate;

    @Field(() => Admin_accessesMaxAggregate, {nullable:true})
    _max?: Admin_accessesMaxAggregate;
}
