import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsScalarWhereInput } from './withdrawal-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsUpdateManyMutationInput } from './withdrawal-transactions-update-many-mutation.input';

@InputType()
export class withdrawal_transactionsUpdateManyWithWhereWithoutPlayer_bank_accountInput {

    @Field(() => withdrawal_transactionsScalarWhereInput, {nullable:false})
    @Type(() => withdrawal_transactionsScalarWhereInput)
    where!: withdrawal_transactionsScalarWhereInput;

    @Field(() => withdrawal_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateManyMutationInput)
    data!: withdrawal_transactionsUpdateManyMutationInput;
}
