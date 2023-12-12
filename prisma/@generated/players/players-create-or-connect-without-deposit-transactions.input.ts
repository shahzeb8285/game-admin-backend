import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutDeposit_transactionsInput } from './players-create-without-deposit-transactions.input';

@InputType()
export class playersCreateOrConnectWithoutDeposit_transactionsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutDeposit_transactionsInput)
    create!: playersCreateWithoutDeposit_transactionsInput;
}
