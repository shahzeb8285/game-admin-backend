import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { players } from '../players/players.model';
import { agents } from '../agents/agents.model';

@ObjectType()
export class agent_records_by_day {

    @Field(() => ID, {nullable:false})
    agent_records_by_day_id!: string;

    @Field(() => String, {nullable:false})
    game_records_by_day_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:true})
    child_agent_id!: string | null;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    rebate_income!: number;

    @Field(() => Float, {nullable:false})
    rebate_expense!: number;

    @Field(() => Float, {nullable:false})
    game_pnl_income!: number;

    @Field(() => Float, {nullable:false})
    game_pnl_expense!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => players, {nullable:false})
    players?: players;

    @Field(() => agents, {nullable:false})
    agents?: agents;
}
