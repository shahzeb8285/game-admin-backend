import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameHistoryCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    game_history_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_id?: true;

    @Field(() => Boolean, {nullable:true})
    player_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    i_gamedesc?: true;

    @Field(() => Boolean, {nullable:true})
    bet_amount?: true;

    @Field(() => Boolean, {nullable:true})
    win_amount?: true;

    @Field(() => Boolean, {nullable:true})
    transaction_date?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
