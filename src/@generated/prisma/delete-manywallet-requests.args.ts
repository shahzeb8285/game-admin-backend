import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsWhereInput } from '../wallet-requests/wallet-requests-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManywalletRequestsArgs {

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    @Type(() => wallet_requestsWhereInput)
    where?: wallet_requestsWhereInput;
}
