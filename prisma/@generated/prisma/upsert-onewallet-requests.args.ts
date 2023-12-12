import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsWhereUniqueInput } from '../wallet-requests/wallet-requests-where-unique.input';
import { Type } from 'class-transformer';
import { wallet_requestsCreateInput } from '../wallet-requests/wallet-requests-create.input';
import { wallet_requestsUpdateInput } from '../wallet-requests/wallet-requests-update.input';

@ArgsType()
export class UpsertOnewalletRequestsArgs {

    @Field(() => wallet_requestsWhereUniqueInput, {nullable:false})
    @Type(() => wallet_requestsWhereUniqueInput)
    where!: wallet_requestsWhereUniqueInput;

    @Field(() => wallet_requestsCreateInput, {nullable:false})
    @Type(() => wallet_requestsCreateInput)
    create!: wallet_requestsCreateInput;

    @Field(() => wallet_requestsUpdateInput, {nullable:false})
    @Type(() => wallet_requestsUpdateInput)
    update!: wallet_requestsUpdateInput;
}
