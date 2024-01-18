import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionUpdateManyMutationInput } from './withdrawal-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionWhereInput } from './withdrawal-transaction-where.input';

@ArgsType()
export class UpdateManyWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateManyMutationInput)
    data!: WithdrawalTransactionUpdateManyMutationInput;

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    @Type(() => WithdrawalTransactionWhereInput)
    where?: WithdrawalTransactionWhereInput;
}
