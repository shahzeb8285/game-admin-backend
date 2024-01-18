import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminRoleAccessesCountAggregate } from './admin-role-accesses-count-aggregate.output';
import { AdminRoleAccessesMinAggregate } from './admin-role-accesses-min-aggregate.output';
import { AdminRoleAccessesMaxAggregate } from './admin-role-accesses-max-aggregate.output';

@ObjectType()
export class AggregateAdminRoleAccesses {

    @Field(() => AdminRoleAccessesCountAggregate, {nullable:true})
    _count?: AdminRoleAccessesCountAggregate;

    @Field(() => AdminRoleAccessesMinAggregate, {nullable:true})
    _min?: AdminRoleAccessesMinAggregate;

    @Field(() => AdminRoleAccessesMaxAggregate, {nullable:true})
    _max?: AdminRoleAccessesMaxAggregate;
}
