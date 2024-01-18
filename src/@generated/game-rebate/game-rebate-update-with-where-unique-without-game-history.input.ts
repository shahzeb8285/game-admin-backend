import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { GameRebateUpdateWithoutGame_historyInput } from './game-rebate-update-without-game-history.input';

@InputType()
export class GameRebateUpdateWithWhereUniqueWithoutGame_historyInput {

    @Field(() => GameRebateWhereUniqueInput, {nullable:false})
    @Type(() => GameRebateWhereUniqueInput)
    where!: Prisma.AtLeast<GameRebateWhereUniqueInput, 'game_rebates_id'>;

    @Field(() => GameRebateUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => GameRebateUpdateWithoutGame_historyInput)
    data!: GameRebateUpdateWithoutGame_historyInput;
}
