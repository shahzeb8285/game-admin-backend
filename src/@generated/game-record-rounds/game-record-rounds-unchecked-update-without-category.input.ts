import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class game_record_roundsUncheckedUpdateWithoutCategoryInput {

    @Field(() => String, {nullable:true})
    game_round_info_id?: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:true})
    game_url?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

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
}
