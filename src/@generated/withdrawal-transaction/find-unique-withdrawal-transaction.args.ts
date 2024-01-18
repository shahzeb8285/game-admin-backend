import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawalTransactionWhereUniqueInput, 'withdrawal_transaction_id'>;
}
