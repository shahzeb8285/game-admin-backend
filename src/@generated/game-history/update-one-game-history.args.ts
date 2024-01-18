import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameHistoryUpdateInput } from './game-history-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';

@ArgsType()
export class UpdateOneGameHistoryArgs {

    @Field(() => GameHistoryUpdateInput, {nullable:false})
    @Type(() => GameHistoryUpdateInput)
    data!: GameHistoryUpdateInput;

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>;
}
