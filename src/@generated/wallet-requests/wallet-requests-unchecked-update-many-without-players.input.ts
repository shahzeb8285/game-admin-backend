import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class wallet_requestsUncheckedUpdateManyWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    wallet_request_id?: string;

    @Field(() => String, {nullable:true})
    tid?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => String, {nullable:true})
    amount?: string;

    @Field(() => String, {nullable:true})
    i_game_id?: string;

    @Field(() => String, {nullable:true})
    i_extparam?: string;

    @Field(() => String, {nullable:true})
    i_rollback?: string;

    @Field(() => String, {nullable:true})
    i_gamedesc?: string;

    @Field(() => String, {nullable:true})
    i_action_id?: string;

    @Field(() => String, {nullable:true})
    i_reference_action_id?: string;

    @Field(() => Boolean, {nullable:true})
    round_start?: boolean;

    @Field(() => Boolean, {nullable:true})
    round_ended?: boolean;

    @Field(() => String, {nullable:true})
    game_extra?: string;

    @Field(() => String, {nullable:true})
    subtype?: string;

    @Field(() => Int, {nullable:true})
    jackpot_win?: number;

    @Field(() => String, {nullable:true})
    hmac?: string;

    @Field(() => String, {nullable:true})
    response?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
