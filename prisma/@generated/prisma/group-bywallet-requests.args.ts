import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsWhereInput } from '../wallet-requests/wallet-requests-where.input';
import { Type } from 'class-transformer';
import { wallet_requestsOrderByWithAggregationInput } from '../wallet-requests/wallet-requests-order-by-with-aggregation.input';
import { Wallet_requestsScalarFieldEnum } from './wallet-requests-scalar-field.enum';
import { wallet_requestsScalarWhereWithAggregatesInput } from '../wallet-requests/wallet-requests-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBywalletRequestsArgs {

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    @Type(() => wallet_requestsWhereInput)
    where?: wallet_requestsWhereInput;

    @Field(() => [wallet_requestsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<wallet_requestsOrderByWithAggregationInput>;

    @Field(() => [Wallet_requestsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Wallet_requestsScalarFieldEnum>;

    @Field(() => wallet_requestsScalarWhereWithAggregatesInput, {nullable:true})
    having?: wallet_requestsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
