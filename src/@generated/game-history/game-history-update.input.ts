import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlayerUpdateOneRequiredWithoutGame_historyNestedInput } from '../player/player-update-one-required-without-game-history-nested.input';
import { GameRebateUpdateManyWithoutGame_historyNestedInput } from '../game-rebate/game-rebate-update-many-without-game-history-nested.input';

@InputType()
export class GameHistoryUpdateInput {

    @Field(() => String, {nullable:true})
    game_history_id?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => String, {nullable:true})
    i_gamedesc?: string;

    @Field(() => Float, {nullable:true})
    bet_amount?: number;

    @Field(() => Float, {nullable:true})
    win_amount?: number;

    @Field(() => String, {nullable:true})
    transaction_date?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => PlayerUpdateOneRequiredWithoutGame_historyNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutGame_historyNestedInput;

    @Field(() => GameRebateUpdateManyWithoutGame_historyNestedInput, {nullable:true})
    game_rebates?: GameRebateUpdateManyWithoutGame_historyNestedInput;
}
