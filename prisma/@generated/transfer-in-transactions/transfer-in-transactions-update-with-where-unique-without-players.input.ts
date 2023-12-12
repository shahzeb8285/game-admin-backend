import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsUpdateWithoutPlayersInput } from './transfer-in-transactions-update-without-players.input';

@InputType()
export class transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<transfer_in_transactionsWhereUniqueInput, 'transfer_in_Transaction_id'>;

    @Field(() => transfer_in_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateWithoutPlayersInput)
    data!: transfer_in_transactionsUpdateWithoutPlayersInput;
}
