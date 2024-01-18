import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class GameHistoryUncheckedUpdateWithoutGame_rebatesInput {

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
}
