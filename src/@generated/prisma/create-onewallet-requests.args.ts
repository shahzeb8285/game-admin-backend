import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsCreateInput } from '../wallet-requests/wallet-requests-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnewalletRequestsArgs {

    @Field(() => wallet_requestsCreateInput, {nullable:false})
    @Type(() => wallet_requestsCreateInput)
    data!: wallet_requestsCreateInput;
}
