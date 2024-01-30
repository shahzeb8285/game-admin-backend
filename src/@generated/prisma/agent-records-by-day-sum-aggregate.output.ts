import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Agent_records_by_daySumAggregate {

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Float, {nullable:true})
    rebate_income?: number;

    @Field(() => Float, {nullable:true})
    rebate_expense?: number;

    @Field(() => Float, {nullable:true})
    game_pnl_income?: number;

    @Field(() => Float, {nullable:true})
    game_pnl_expense?: number;
}
