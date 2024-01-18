import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutTransfer_in_transactionsInput } from './player-create-without-transfer-in-transactions.input';

@InputType()
export class PlayerCreateOrConnectWithoutTransfer_in_transactionsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutTransfer_in_transactionsInput)
    create!: PlayerCreateWithoutTransfer_in_transactionsInput;
}
