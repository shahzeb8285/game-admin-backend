import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionUpdateWithoutPlayersInput } from './withdrawal-transaction-update-without-players.input';

@InputType()
export class WithdrawalTransactionUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawalTransactionWhereUniqueInput, 'withdrawal_transaction_id'>;

    @Field(() => WithdrawalTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => WithdrawalTransactionUpdateWithoutPlayersInput)
    data!: WithdrawalTransactionUpdateWithoutPlayersInput;
}
