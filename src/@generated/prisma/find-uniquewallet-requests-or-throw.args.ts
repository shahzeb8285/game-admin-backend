import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsWhereUniqueInput } from '../wallet-requests/wallet-requests-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquewalletRequestsOrThrowArgs {

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:false})
    @Type(() => wallet_requestsWhereUniqueInput)
    where!: wallet_requestsWhereUniqueInput;
}
