import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyCreateInput } from '../game-history/game-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameHistoryArgs {

    @Field(() => game_historyCreateInput, {nullable:false})
    @Type(() => game_historyCreateInput)
    data!: game_historyCreateInput;
}
