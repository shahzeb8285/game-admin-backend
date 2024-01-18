import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameHistoryUpdateWithoutGame_rebatesInput } from './game-history-update-without-game-rebates.input';
import { Type } from 'class-transformer';
import { GameHistoryCreateWithoutGame_rebatesInput } from './game-history-create-without-game-rebates.input';
import { GameHistoryWhereInput } from './game-history-where.input';

@InputType()
export class GameHistoryUpsertWithoutGame_rebatesInput {

    @Field(() => GameHistoryUpdateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => GameHistoryUpdateWithoutGame_rebatesInput)
    update!: GameHistoryUpdateWithoutGame_rebatesInput;

    @Field(() => GameHistoryCreateWithoutGame_rebatesInput, {nullable:false})
    @Type(() => GameHistoryCreateWithoutGame_rebatesInput)
    create!: GameHistoryCreateWithoutGame_rebatesInput;

    @Field(() => GameHistoryWhereInput, {nullable:true})
    @Type(() => GameHistoryWhereInput)
    where?: GameHistoryWhereInput;
}
