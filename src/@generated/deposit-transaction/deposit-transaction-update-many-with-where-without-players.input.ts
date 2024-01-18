import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionScalarWhereInput } from './deposit-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { DepositTransactionUpdateManyMutationInput } from './deposit-transaction-update-many-mutation.input';

@InputType()
export class DepositTransactionUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => DepositTransactionScalarWhereInput, {nullable:false})
    @Type(() => DepositTransactionScalarWhereInput)
    where!: DepositTransactionScalarWhereInput;

    @Field(() => DepositTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => DepositTransactionUpdateManyMutationInput)
    data!: DepositTransactionUpdateManyMutationInput;
}
