import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionUpdateInput } from './withdrawal-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';

@ArgsType()
export class UpdateOneWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionUpdateInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateInput)
    data!: WithdrawalTransactionUpdateInput;

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawalTransactionWhereUniqueInput, 'withdrawal_transaction_id'>;
}