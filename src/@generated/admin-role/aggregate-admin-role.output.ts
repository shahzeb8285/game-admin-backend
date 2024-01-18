import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminRoleCountAggregate } from './admin-role-count-aggregate.output';
import { AdminRoleMinAggregate } from './admin-role-min-aggregate.output';
import { AdminRoleMaxAggregate } from './admin-role-max-aggregate.output';

@ObjectType()
export class AggregateAdminRole {

    @Field(() => AdminRoleCountAggregate, {nullable:true})
    _count?: AdminRoleCountAggregate;

    @Field(() => AdminRoleMinAggregate, {nullable:true})
    _min?: AdminRoleMinAggregate;

    @Field(() => AdminRoleMaxAggregate, {nullable:true})
    _max?: AdminRoleMaxAggregate;
}
