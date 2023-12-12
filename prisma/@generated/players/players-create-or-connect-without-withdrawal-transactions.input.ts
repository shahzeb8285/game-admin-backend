import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutWithdrawal_transactionsInput } from './players-create-without-withdrawal-transactions.input';

@InputType()
export class playersCreateOrConnectWithoutWithdrawal_transactionsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutWithdrawal_transactionsInput)
    create!: playersCreateWithoutWithdrawal_transactionsInput;
}
