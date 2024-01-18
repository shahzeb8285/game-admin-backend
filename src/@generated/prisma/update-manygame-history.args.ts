import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_historyUpdateManyMutationInput } from '../game-history/game-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_historyWhereInput } from '../game-history/game-history-where.input';

@ArgsType()
export class UpdateManygameHistoryArgs {

    @Field(() => game_historyUpdateManyMutationInput, {nullable:false})
    @Type(() => game_historyUpdateManyMutationInput)
    data!: game_historyUpdateManyMutationInput;

    @Field(() => game_historyWhereInput, {nullable:true})
    @Type(() => game_historyWhereInput)
    where?: game_historyWhereInput;
}
