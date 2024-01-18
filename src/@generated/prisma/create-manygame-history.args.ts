import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyCreateManyInput } from '../game-history/game-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameHistoryArgs {

    @Field(() => [game_historyCreateManyInput], {nullable:false})
    @Type(() => game_historyCreateManyInput)
    data!: Array<game_historyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
