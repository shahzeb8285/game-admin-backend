import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutWithdrawal_transactionsInput } from './player-create-without-withdrawal-transactions.input';

@InputType()
export class PlayerCreateOrConnectWithoutWithdrawal_transactionsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutWithdrawal_transactionsInput)
    create!: PlayerCreateWithoutWithdrawal_transactionsInput;
}
