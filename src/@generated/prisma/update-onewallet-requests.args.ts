import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsUpdateInput } from '../wallet-requests/wallet-requests-update.input';
import { Type } from 'class-transformer';
import { wallet_requestsWhereUniqueInput } from '../wallet-requests/wallet-requests-where-unique.input';

@ArgsType()
export class UpdateOnewalletRequestsArgs {

    @Field(() => wallet_requestsUpdateInput, {nullable:false})
    @Type(() => wallet_requestsUpdateInput)
    data!: wallet_requestsUpdateInput;

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:false})
    @Type(() => wallet_requestsWhereUniqueInput)
    where!: wallet_requestsWhereUniqueInput;
}
