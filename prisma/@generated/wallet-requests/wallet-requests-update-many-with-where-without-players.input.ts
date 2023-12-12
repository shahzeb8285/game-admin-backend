import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_requestsScalarWhereInput } from './wallet-requests-scalar-where.input';
import { Type } from 'class-transformer';
import { wallet_requestsUpdateManyMutationInput } from './wallet-requests-update-many-mutation.input';

@InputType()
export class wallet_requestsUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => wallet_requestsScalarWhereInput, {nullable:false})
    @Type(() => wallet_requestsScalarWhereInput)
    where!: wallet_requestsScalarWhereInput;

    @Field(() => wallet_requestsUpdateManyMutationInput, {nullable:false})
    @Type(() => wallet_requestsUpdateManyMutationInput)
    data!: wallet_requestsUpdateManyMutationInput;
}
