import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionScalarWhereInput } from './withdrawal-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionUpdateManyMutationInput } from './withdrawal-transaction-update-many-mutation.input';

@InputType()
export class WithdrawalTransactionUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => WithdrawalTransactionScalarWhereInput, {nullable:false})
    @Type(() => WithdrawalTransactionScalarWhereInput)
    where!: WithdrawalTransactionScalarWhereInput;

    @Field(() => WithdrawalTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateManyMutationInput)
    data!: WithdrawalTransactionUpdateManyMutationInput;
}
