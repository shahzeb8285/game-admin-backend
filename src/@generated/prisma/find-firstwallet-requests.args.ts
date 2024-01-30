import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsWhereInput } from '../wallet-requests/wallet-requests-where.input';
import { Type } from 'class-transformer';
import { wallet_requestsOrderByWithRelationInput } from '../wallet-requests/wallet-requests-order-by-with-relation.input';
import { wallet_requestsWhereUniqueInput } from '../wallet-requests/wallet-requests-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Wallet_requestsScalarFieldEnum } from './wallet-requests-scalar-field.enum';

@ArgsType()
export class FindFirstwalletRequestsArgs {

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    @Type(() => wallet_requestsWhereInput)
    where?: wallet_requestsWhereInput;

    @Field(() => [wallet_requestsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<wallet_requestsOrderByWithRelationInput>;

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:true})
    cursor?: wallet_requestsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Wallet_requestsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Wallet_requestsScalarFieldEnum>;
}
