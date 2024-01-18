import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateWhereUniqueInput } from './game-rebate-where-unique.input';
import { Type } from 'class-transformer';
import { GameRebateUpdateWithoutGame_historyInput } from './game-rebate-update-without-game-history.input';
import { GameRebateCreateWithoutGame_historyInput } from './game-rebate-create-without-game-history.input';

@InputType()
export class GameRebateUpsertWithWhereUniqueWithoutGame_historyInput {

    @Field(() => GameRebateWhereUniqueInput, {nullable:false})
    @Type(() => GameRebateWhereUniqueInput)
    where!: GameRebateWhereUniqueInput;

    @Field(() => GameRebateUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => GameRebateUpdateWithoutGame_historyInput)
    update!: GameRebateUpdateWithoutGame_historyInput;

    @Field(() => GameRebateCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => GameRebateCreateWithoutGame_historyInput)
    create!: GameRebateCreateWithoutGame_historyInput;
}
