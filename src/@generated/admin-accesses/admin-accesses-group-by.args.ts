import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminAccessesOrderByWithAggregationInput } from './admin-accesses-order-by-with-aggregation.input';
import { AdminAccessesScalarFieldEnum } from './admin-accesses-scalar-field.enum';
import { AdminAccessesScalarWhereWithAggregatesInput } from './admin-accesses-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminAccessesCountAggregateInput } from './admin-accesses-count-aggregate.input';
import { AdminAccessesMinAggregateInput } from './admin-accesses-min-aggregate.input';
import { AdminAccessesMaxAggregateInput } from './admin-accesses-max-aggregate.input';

@ArgsType()
export class AdminAccessesGroupByArgs {

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    @Type(() => AdminAccessesWhereInput)
    where?: AdminAccessesWhereInput;

    @Field(() => [AdminAccessesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminAccessesOrderByWithAggregationInput>;

    @Field(() => [AdminAccessesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminAccessesScalarFieldEnum>;

    @Field(() => AdminAccessesScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminAccessesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminAccessesCountAggregateInput, {nullable:true})
    _count?: AdminAccessesCountAggregateInput;

    @Field(() => AdminAccessesMinAggregateInput, {nullable:true})
    _min?: AdminAccessesMinAggregateInput;

    @Field(() => AdminAccessesMaxAggregateInput, {nullable:true})
    _max?: AdminAccessesMaxAggregateInput;
}
