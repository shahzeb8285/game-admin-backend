import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayWhereInput } from './agent-records-by-day-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';

@InputType()
export class agent_records_by_dayWhereUniqueInput {

    @Field(() => String, {nullable:true})
    agent_records_by_day_id?: string;

    @Field(() => [agent_records_by_dayWhereInput], {nullable:true})
    AND?: Array<agent_records_by_dayWhereInput>;

    @Field(() => [agent_records_by_dayWhereInput], {nullable:true})
    OR?: Array<agent_records_by_dayWhereInput>;

    @Field(() => [agent_records_by_dayWhereInput], {nullable:true})
    NOT?: Array<agent_records_by_dayWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_records_by_day_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    game_date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rebate_category_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    child_agent_id?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    effective_bet_amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate_income?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate_expense?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    game_pnl_income?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    game_pnl_expense?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_active?: BoolFilter;

    @Field(() => AgentsRelationFilter, {nullable:true})
    agents?: AgentsRelationFilter;
}
