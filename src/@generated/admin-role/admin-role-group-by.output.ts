import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminRoleCountAggregate } from './admin-role-count-aggregate.output';
import { AdminRoleMinAggregate } from './admin-role-min-aggregate.output';
import { AdminRoleMaxAggregate } from './admin-role-max-aggregate.output';

@ObjectType()
export class AdminRoleGroupBy {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => AdminRoleCountAggregate, {nullable:true})
    _count?: AdminRoleCountAggregate;

    @Field(() => AdminRoleMinAggregate, {nullable:true})
    _min?: AdminRoleMinAggregate;

    @Field(() => AdminRoleMaxAggregate, {nullable:true})
    _max?: AdminRoleMaxAggregate;
}
