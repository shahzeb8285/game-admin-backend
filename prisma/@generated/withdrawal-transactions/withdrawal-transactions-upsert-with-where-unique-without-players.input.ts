import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsUpdateWithoutPlayersInput } from './withdrawal-transactions-update-without-players.input';
import { withdrawal_transactionsCreateWithoutPlayersInput } from './withdrawal-transactions-create-without-players.input';

@InputType()
export class withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<withdrawal_transactionsWhereUniqueInput, 'withdrawal_transaction_id'>;

    @Field(() => withdrawal_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateWithoutPlayersInput)
    update!: withdrawal_transactionsUpdateWithoutPlayersInput;

    @Field(() => withdrawal_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateWithoutPlayersInput)
    create!: withdrawal_transactionsCreateWithoutPlayersInput;
}
