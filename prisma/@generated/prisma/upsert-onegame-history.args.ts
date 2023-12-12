import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyWhereUniqueInput } from '../game-history/game-history-where-unique.input';
import { Type } from 'class-transformer';
import { game_historyCreateInput } from '../game-history/game-history-create.input';
import { game_historyUpdateInput } from '../game-history/game-history-update.input';

@ArgsType()
export class UpsertOnegameHistoryArgs {

    @Field(() => game_historyWhereUniqueInput, {nullable:false})
    @Type(() => game_historyWhereUniqueInput)
    where!: game_historyWhereUniqueInput;

    @Field(() => game_historyCreateInput, {nullable:false})
    @Type(() => game_historyCreateInput)
    create!: game_historyCreateInput;

    @Field(() => game_historyUpdateInput, {nullable:false})
    @Type(() => game_historyUpdateInput)
    update!: game_historyUpdateInput;
}
