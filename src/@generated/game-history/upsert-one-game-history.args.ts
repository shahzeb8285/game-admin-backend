import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateInput } from './game-history-create.input';
import { GameHistoryUpdateInput } from './game-history-update.input';

@ArgsType()
export class UpsertOneGameHistoryArgs {

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>;

    @Field(() => GameHistoryCreateInput, {nullable:false})
    @Type(() => GameHistoryCreateInput)
    create!: GameHistoryCreateInput;

    @Field(() => GameHistoryUpdateInput, {nullable:false})
    @Type(() => GameHistoryUpdateInput)
    update!: GameHistoryUpdateInput;
}
