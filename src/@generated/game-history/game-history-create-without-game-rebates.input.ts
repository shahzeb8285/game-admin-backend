import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlayerCreateNestedOneWithoutGame_historyInput } from '../player/player-create-nested-one-without-game-history.input';

@InputType()
export class GameHistoryCreateWithoutGame_rebatesInput {

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

    @Field(() => PlayerCreateNestedOneWithoutGame_historyInput, {nullable:false})
    players!: PlayerCreateNestedOneWithoutGame_historyInput;
}
