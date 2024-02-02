import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutGame_record_roundsNestedInput } from '../players/players-update-one-required-without-game-record-rounds-nested.input';

@InputType()
export class game_record_roundsUpdateInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:true})
    game_url?: string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    bet_amount?: number;

    @Field(() => Float, {nullable:true})
    payout?: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Boolean, {nullable:true})
    is_processed?: boolean;

    @Field(() => String, {nullable:true})
    game_records_by_period_id?: string;

    @Field(() => playersUpdateOneRequiredWithoutGame_record_roundsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutGame_record_roundsNestedInput;
}
