import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';
import { Type } from 'class-transformer';
import { AdminLoginLogOrderByWithAggregationInput } from './admin-login-log-order-by-with-aggregation.input';
import { AdminLoginLogScalarFieldEnum } from './admin-login-log-scalar-field.enum';
import { AdminLoginLogScalarWhereWithAggregatesInput } from './admin-login-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminLoginLogCountAggregateInput } from './admin-login-log-count-aggregate.input';
import { AdminLoginLogMinAggregateInput } from './admin-login-log-min-aggregate.input';
import { AdminLoginLogMaxAggregateInput } from './admin-login-log-max-aggregate.input';

@ArgsType()
export class AdminLoginLogGroupByArgs {

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    @Type(() => AdminLoginLogWhereInput)
    where?: AdminLoginLogWhereInput;

    @Field(() => [AdminLoginLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminLoginLogOrderByWithAggregationInput>;

    @Field(() => [AdminLoginLogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminLoginLogScalarFieldEnum>;

    @Field(() => AdminLoginLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminLoginLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminLoginLogCountAggregateInput, {nullable:true})
    _count?: AdminLoginLogCountAggregateInput;

    @Field(() => AdminLoginLogMinAggregateInput, {nullable:true})
    _min?: AdminLoginLogMinAggregateInput;

    @Field(() => AdminLoginLogMaxAggregateInput, {nullable:true})
    _max?: AdminLoginLogMaxAggregateInput;
}
