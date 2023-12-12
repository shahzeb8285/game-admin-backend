import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsWhereInput } from '../all-ow-requests/all-ow-requests-where.input';
import { Type } from 'class-transformer';
import { all_ow_requestsOrderByWithAggregationInput } from '../all-ow-requests/all-ow-requests-order-by-with-aggregation.input';
import { All_ow_requestsScalarFieldEnum } from './all-ow-requests-scalar-field.enum';
import { all_ow_requestsScalarWhereWithAggregatesInput } from '../all-ow-requests/all-ow-requests-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByallOwRequestsArgs {

    @Field(() => all_ow_requestsWhereInput, {nullable:true})
    @Type(() => all_ow_requestsWhereInput)
    where?: all_ow_requestsWhereInput;

    @Field(() => [all_ow_requestsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<all_ow_requestsOrderByWithAggregationInput>;

    @Field(() => [All_ow_requestsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof All_ow_requestsScalarFieldEnum>;

    @Field(() => all_ow_requestsScalarWhereWithAggregatesInput, {nullable:true})
    having?: all_ow_requestsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
