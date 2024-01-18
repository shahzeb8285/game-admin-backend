import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { GameRebateCreateWithoutGame_historyInput } from './game-rebate-create-without-game-history.input';

@InputType()
export class GameRebateCreateOrConnectWithoutGame_historyInput {

    @Field(() => GameRebateWhereUniqueInput, {nullable:false})
    @Type(() => GameRebateWhereUniqueInput)
    where!: Prisma.AtLeast<GameRebateWhereUniqueInput, 'game_rebates_id'>;

    @Field(() => GameRebateCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => GameRebateCreateWithoutGame_historyInput)
    create!: GameRebateCreateWithoutGame_historyInput;
}
