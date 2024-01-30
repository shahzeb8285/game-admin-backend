import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { wallet_requestsCreateManyInput } from '../wallet-requests/wallet-requests-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManywalletRequestsArgs {

    @Field(() => [wallet_requestsCreateManyInput], {nullable:false})
    @Type(() => wallet_requestsCreateManyInput)
    data!: Array<wallet_requestsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
