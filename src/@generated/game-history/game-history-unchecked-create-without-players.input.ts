import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GameRebateUncheckedCreateNestedManyWithoutGame_historyInput } from '../game-rebate/game-rebate-unchecked-create-nested-many-without-game-history.input';

@InputType()
export class GameHistoryUncheckedCreateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    game_history_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;

    @Field(() => Float, {nullable:false})
    win_amount!: number;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => GameRebateUncheckedCreateNestedManyWithoutGame_historyInput, {nullable:true})
    game_rebates?: GameRebateUncheckedCreateNestedManyWithoutGame_historyInput;
}
