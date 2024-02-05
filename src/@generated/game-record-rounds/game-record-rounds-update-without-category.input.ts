import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { game_round_infosUpdateOneRequiredWithoutGame_record_roundsNestedInput } from '../game-round-infos/game-round-infos-update-one-required-without-game-record-rounds-nested.input';
import { playersUpdateOneRequiredWithoutGame_record_roundsNestedInput } from '../players/players-update-one-required-without-game-record-rounds-nested.input';

@InputType()
export class game_record_roundsUpdateWithoutCategoryInput {

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:true})
    game_url?: string;

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

    @Field(() => game_round_infosUpdateOneRequiredWithoutGame_record_roundsNestedInput, {nullable:true})
    game_round?: game_round_infosUpdateOneRequiredWithoutGame_record_roundsNestedInput;

    @Field(() => playersUpdateOneRequiredWithoutGame_record_roundsNestedInput, {nullable:true})
    player?: playersUpdateOneRequiredWithoutGame_record_roundsNestedInput;
}
