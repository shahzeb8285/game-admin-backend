import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsScalarWhereInput } from './deposit-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { deposit_transactionsUpdateManyMutationInput } from './deposit-transactions-update-many-mutation.input';

@InputType()
export class deposit_transactionsUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => deposit_transactionsScalarWhereInput, {nullable:false})
    @Type(() => deposit_transactionsScalarWhereInput)
    where!: deposit_transactionsScalarWhereInput;

    @Field(() => deposit_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateManyMutationInput)
    data!: deposit_transactionsUpdateManyMutationInput;
}
