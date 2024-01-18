import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutDeposit_transactionsInput } from './player-create-without-deposit-transactions.input';

@InputType()
export class PlayerCreateOrConnectWithoutDeposit_transactionsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutDeposit_transactionsInput)
    create!: PlayerCreateWithoutDeposit_transactionsInput;
}
