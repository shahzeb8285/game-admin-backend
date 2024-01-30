import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsNullableRelationFilter } from '../prisma/agents-nullable-relation-filter.input';
import { AgentsListRelationFilter } from '../prisma/agents-list-relation-filter.input';
import { PlayersListRelationFilter } from '../prisma/players-list-relation-filter.input';
import { Agent_rebate_ratesListRelationFilter } from '../prisma/agent-rebate-rates-list-relation-filter.input';
import { Agent_sharesListRelationFilter } from '../prisma/agent-shares-list-relation-filter.input';
import { Agent_records_by_dayListRelationFilter } from '../prisma/agent-records-by-day-list-relation-filter.input';

@InputType()
export class agentsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:true})
    agent_name?: string;

    @Field(() => [agentsWhereInput], {nullable:true})
    AND?: Array<agentsWhereInput>;

    @Field(() => [agentsWhereInput], {nullable:true})
    OR?: Array<agentsWhereInput>;

    @Field(() => [agentsWhereInput], {nullable:true})
    NOT?: Array<agentsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    agent_password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parent_agent_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AgentsNullableRelationFilter, {nullable:true})
    parent?: AgentsNullableRelationFilter;

    @Field(() => AgentsListRelationFilter, {nullable:true})
    children?: AgentsListRelationFilter;

    @Field(() => PlayersListRelationFilter, {nullable:true})
    players?: PlayersListRelationFilter;

    @Field(() => Agent_rebate_ratesListRelationFilter, {nullable:true})
    agent_rebate_rates?: Agent_rebate_ratesListRelationFilter;

    @Field(() => Agent_sharesListRelationFilter, {nullable:true})
    agent_shares?: Agent_sharesListRelationFilter;

    @Field(() => Agent_records_by_dayListRelationFilter, {nullable:true})
    agent_records_by_day?: Agent_records_by_dayListRelationFilter;
}
