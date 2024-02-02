import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutAgent_records_by_dayNestedInput } from '../players/players-update-one-required-without-agent-records-by-day-nested.input';
import { agentsUpdateOneRequiredWithoutAgent_records_by_dayNestedInput } from '../agents/agents-update-one-required-without-agent-records-by-day-nested.input';

@InputType()
export class agent_records_by_dayUpdateInput {

    @Field(() => String, {nullable:true})
    agent_records_by_day_id?: string;

    @Field(() => String, {nullable:true})
    game_records_by_day_id?: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => String, {nullable:true})
    child_agent_id?: string;

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

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;

    @Field(() => playersUpdateOneRequiredWithoutAgent_records_by_dayNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutAgent_records_by_dayNestedInput;

    @Field(() => agentsUpdateOneRequiredWithoutAgent_records_by_dayNestedInput, {nullable:true})
    agents?: agentsUpdateOneRequiredWithoutAgent_records_by_dayNestedInput;
}
