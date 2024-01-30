import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Agent_records_by_dayCountAggregate {

    @Field(() => Int, {nullable:false})
    agent_records_by_day_id!: number;

    @Field(() => Int, {nullable:false})
    game_records_by_day_id!: number;

    @Field(() => Int, {nullable:false})
    game_date!: number;

    @Field(() => Int, {nullable:false})
    player_id!: number;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Int, {nullable:false})
    agent_id!: number;

    @Field(() => Int, {nullable:false})
    child_agent_id!: number;

    @Field(() => Int, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Int, {nullable:false})
    rebate_income!: number;

    @Field(() => Int, {nullable:false})
    rebate_expense!: number;

    @Field(() => Int, {nullable:false})
    game_pnl_income!: number;

    @Field(() => Int, {nullable:false})
    game_pnl_expense!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    is_active!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
