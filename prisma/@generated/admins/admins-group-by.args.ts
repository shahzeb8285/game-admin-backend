import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { AdminsOrderByWithAggregationInput } from './admins-order-by-with-aggregation.input';
import { AdminsScalarFieldEnum } from './admins-scalar-field.enum';
import { AdminsScalarWhereWithAggregatesInput } from './admins-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminsCountAggregateInput } from './admins-count-aggregate.input';
import { AdminsMinAggregateInput } from './admins-min-aggregate.input';
import { AdminsMaxAggregateInput } from './admins-max-aggregate.input';

@ArgsType()
export class AdminsGroupByArgs {

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;

    @Field(() => [AdminsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminsOrderByWithAggregationInput>;

    @Field(() => [AdminsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminsScalarFieldEnum>;

    @Field(() => AdminsScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminsCountAggregateInput, {nullable:true})
    _count?: AdminsCountAggregateInput;

    @Field(() => AdminsMinAggregateInput, {nullable:true})
    _min?: AdminsMinAggregateInput;

    @Field(() => AdminsMaxAggregateInput, {nullable:true})
    _max?: AdminsMaxAggregateInput;
}
