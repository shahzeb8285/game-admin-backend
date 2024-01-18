import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionUpdateWithoutPlayersInput } from './deposit-transaction-update-without-players.input';
import { DepositTransactionCreateWithoutPlayersInput } from './deposit-transaction-create-without-players.input';

@InputType()
export class DepositTransactionUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>;

    @Field(() => DepositTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => DepositTransactionUpdateWithoutPlayersInput)
    update!: DepositTransactionUpdateWithoutPlayersInput;

    @Field(() => DepositTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => DepositTransactionCreateWithoutPlayersInput)
    create!: DepositTransactionCreateWithoutPlayersInput;
}
