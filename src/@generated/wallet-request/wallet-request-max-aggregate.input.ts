import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WalletRequestMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    wallet_request_id?: true;

    @Field(() => Boolean, {nullable:true})
    t_id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    player_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    i_game_id?: true;

    @Field(() => Boolean, {nullable:true})
    i_extparam?: true;

    @Field(() => Boolean, {nullable:true})
    i_rollback?: true;

    @Field(() => Boolean, {nullable:true})
    i_gamedesc?: true;

    @Field(() => Boolean, {nullable:true})
    i_action_id?: true;

    @Field(() => Boolean, {nullable:true})
    i_reference_action_id?: true;

    @Field(() => Boolean, {nullable:true})
    round_start?: true;

    @Field(() => Boolean, {nullable:true})
    round_ended?: true;

    @Field(() => Boolean, {nullable:true})
    game_extra?: true;

    @Field(() => Boolean, {nullable:true})
    subtype?: true;

    @Field(() => Boolean, {nullable:true})
    jackpot_win?: true;

    @Field(() => Boolean, {nullable:true})
    hmac?: true;

    @Field(() => Boolean, {nullable:true})
    response?: true;
}
