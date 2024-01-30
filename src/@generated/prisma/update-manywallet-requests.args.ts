import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsUpdateManyMutationInput } from '../wallet-requests/wallet-requests-update-many-mutation.input';
import { Type } from 'class-transformer';
import { wallet_requestsWhereInput } from '../wallet-requests/wallet-requests-where.input';

@ArgsType()
export class UpdateManywalletRequestsArgs {

    @Field(() => wallet_requestsUpdateManyMutationInput, {nullable:false})
    @Type(() => wallet_requestsUpdateManyMutationInput)
    data!: wallet_requestsUpdateManyMutationInput;

    @Field(() => wallet_requestsWhereInput, {nullable:true})
    @Type(() => wallet_requestsWhereInput)
    where?: wallet_requestsWhereInput;
}
