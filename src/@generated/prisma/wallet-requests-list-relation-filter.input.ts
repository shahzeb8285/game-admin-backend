import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_requestsWhereInput } from '../wallet-requests/wallet-requests-where.input';

@InputType()
export class Wallet_requestsListRelationFilter {

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    every?: wallet_requestsWhereInput;

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    some?: wallet_requestsWhereInput;

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    none?: wallet_requestsWhereInput;
}
