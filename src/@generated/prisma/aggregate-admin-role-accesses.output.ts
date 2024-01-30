import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Admin_role_accessesCountAggregate } from './admin-role-accesses-count-aggregate.output';
import { Admin_role_accessesMinAggregate } from './admin-role-accesses-min-aggregate.output';
import { Admin_role_accessesMaxAggregate } from './admin-role-accesses-max-aggregate.output';

@ObjectType()
export class AggregateAdmin_role_accesses {

    @Field(() => Admin_role_accessesCountAggregate, {nullable:true})
    _count?: Admin_role_accessesCountAggregate;

    @Field(() => Admin_role_accessesMinAggregate, {nullable:true})
    _min?: Admin_role_accessesMinAggregate;

    @Field(() => Admin_role_accessesMaxAggregate, {nullable:true})
    _max?: Admin_role_accessesMaxAggregate;
}
