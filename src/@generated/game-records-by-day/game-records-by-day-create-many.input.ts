import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class game_records_by_dayCreateManyInput {

    @Field(() => String, {nullable:true})
    game_records_by_day_id?: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    pnl!: number;

    @Field(() => Float, {nullable:false})
    rebate_amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;
}
