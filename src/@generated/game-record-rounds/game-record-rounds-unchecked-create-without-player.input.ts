import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class game_record_roundsUncheckedCreateWithoutPlayerInput {

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;

    @Field(() => Float, {nullable:false})
    payout!: number;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Boolean, {nullable:false})
    is_processed!: boolean;

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;
}
