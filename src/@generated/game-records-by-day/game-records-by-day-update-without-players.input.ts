import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class game_records_by_dayUpdateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    game_records_by_day_id?: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Float, {nullable:true})
    pnl?: number;

    @Field(() => Float, {nullable:true})
    rebate_amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;
}
