import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereInput } from './admin-role-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesOrderByWithAggregationInput } from './admin-role-accesses-order-by-with-aggregation.input';
import { AdminRoleAccessesScalarFieldEnum } from './admin-role-accesses-scalar-field.enum';
import { AdminRoleAccessesScalarWhereWithAggregatesInput } from './admin-role-accesses-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminRoleAccessesCountAggregateInput } from './admin-role-accesses-count-aggregate.input';
import { AdminRoleAccessesMinAggregateInput } from './admin-role-accesses-min-aggregate.input';
import { AdminRoleAccessesMaxAggregateInput } from './admin-role-accesses-max-aggregate.input';

@ArgsType()
export class AdminRoleAccessesGroupByArgs {

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    @Type(() => AdminRoleAccessesWhereInput)
    where?: AdminRoleAccessesWhereInput;

    @Field(() => [AdminRoleAccessesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminRoleAccessesOrderByWithAggregationInput>;

    @Field(() => [AdminRoleAccessesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminRoleAccessesScalarFieldEnum>;

    @Field(() => AdminRoleAccessesScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminRoleAccessesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminRoleAccessesCountAggregateInput, {nullable:true})
    _count?: AdminRoleAccessesCountAggregateInput;

    @Field(() => AdminRoleAccessesMinAggregateInput, {nullable:true})
    _min?: AdminRoleAccessesMinAggregateInput;

    @Field(() => AdminRoleAccessesMaxAggregateInput, {nullable:true})
    _max?: AdminRoleAccessesMaxAggregateInput;
}
