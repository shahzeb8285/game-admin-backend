import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameHistoryWhereUniqueInput } from './game-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGameHistoryOrThrowArgs {

    @Field(() => GameHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GameHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<GameHistoryWhereUniqueInput, 'game_history_id'>;
}
