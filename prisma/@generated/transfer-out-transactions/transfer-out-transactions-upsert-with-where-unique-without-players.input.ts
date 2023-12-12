import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsUpdateWithoutPlayersInput } from './transfer-out-transactions-update-without-players.input';
import { transfer_out_transactionsCreateWithoutPlayersInput } from './transfer-out-transactions-create-without-players.input';

@InputType()
export class transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<transfer_out_transactionsWhereUniqueInput, 'transfer_out_transaction_id'>;

    @Field(() => transfer_out_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateWithoutPlayersInput)
    update!: transfer_out_transactionsUpdateWithoutPlayersInput;

    @Field(() => transfer_out_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => transfer_out_transactionsCreateWithoutPlayersInput)
    create!: transfer_out_transactionsCreateWithoutPlayersInput;
}
