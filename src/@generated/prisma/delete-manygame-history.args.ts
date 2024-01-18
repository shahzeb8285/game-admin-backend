import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyWhereInput } from '../game-history/game-history-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameHistoryArgs {

    @Field(() => game_historyWhereInput, {nullable:true})
    @Type(() => game_historyWhereInput)
    where?: game_historyWhereInput;
}
