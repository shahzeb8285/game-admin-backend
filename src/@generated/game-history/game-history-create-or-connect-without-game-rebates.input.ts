import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';

@InputType()
export class GameHistoryCreateOrConnectWithoutGame_rebatesInput {

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>;

    @Field(() => GameHistoryCreateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => GameHistoryCreateWithoutGame_rebatesInput)
    create!: GameHistoryCreateWithoutGame_rebatesInput;
}
