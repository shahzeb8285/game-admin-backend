import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GameRebateUncheckedUpdateManyWithoutGame_historyNestedInput } from '../game-rebate/game-rebate-unchecked-update-many-without-game-history-nested.input';

@InputType()
export class GameHistoryUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    game_history_id?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => String, {nullable:true})
    player_id_r?: string;

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

    @Field(() => GameRebateUncheckedUpdateManyWithoutGame_historyNestedInput, {nullable:true})
    game_rebates?: GameRebateUncheckedUpdateManyWithoutGame_historyNestedInput;
}
