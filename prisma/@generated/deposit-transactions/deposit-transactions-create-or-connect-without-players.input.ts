import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateWithoutPlayersInput } from './deposit-transactions-create-without-players.input';

@InputType()
export class deposit_transactionsCreateOrConnectWithoutPlayersInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>;

    @Field(() => deposit_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => deposit_transactionsCreateWithoutPlayersInput)
    create!: deposit_transactionsCreateWithoutPlayersInput;
}
