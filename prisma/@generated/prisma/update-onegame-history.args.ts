import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyUpdateInput } from '../game-history/game-history-update.input';
import { Type } from 'class-transformer';
import { game_historyWhereUniqueInput } from '../game-history/game-history-where-unique.input';

@ArgsType()
export class UpdateOnegameHistoryArgs {

    @Field(() => game_historyUpdateInput, {nullable:false})
    @Type(() => game_historyUpdateInput)
    data!: game_historyUpdateInput;

    @Field(() => game_historyWhereUniqueInput, {nullable:false})
    @Type(() => game_historyWhereUniqueInput)
    where!: game_historyWhereUniqueInput;
}
