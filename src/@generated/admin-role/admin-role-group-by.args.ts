import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleWhereInput } from './admin-role-where.input';
import { Type } from 'class-transformer';
import { AdminRoleOrderByWithAggregationInput } from './admin-role-order-by-with-aggregation.input';
import { AdminRoleScalarFieldEnum } from './admin-role-scalar-field.enum';
import { AdminRoleScalarWhereWithAggregatesInput } from './admin-role-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminRoleCountAggregateInput } from './admin-role-count-aggregate.input';
import { AdminRoleMinAggregateInput } from './admin-role-min-aggregate.input';
import { AdminRoleMaxAggregateInput } from './admin-role-max-aggregate.input';

@ArgsType()
export class AdminRoleGroupByArgs {

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;

    @Field(() => [AdminRoleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminRoleOrderByWithAggregationInput>;

    @Field(() => [AdminRoleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminRoleScalarFieldEnum>;

    @Field(() => AdminRoleScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminRoleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminRoleCountAggregateInput, {nullable:true})
    _count?: AdminRoleCountAggregateInput;

    @Field(() => AdminRoleMinAggregateInput, {nullable:true})
    _min?: AdminRoleMinAggregateInput;

    @Field(() => AdminRoleMaxAggregateInput, {nullable:true})
    _max?: AdminRoleMaxAggregateInput;
}
