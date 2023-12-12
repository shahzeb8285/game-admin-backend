import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyWhereUniqueInput } from '../game-history/game-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnegameHistoryArgs {

    @Field(() => game_historyWhereUniqueInput, {nullable:false})
    @Type(() => game_historyWhereUniqueInput)
    where!: game_historyWhereUniqueInput;
}
