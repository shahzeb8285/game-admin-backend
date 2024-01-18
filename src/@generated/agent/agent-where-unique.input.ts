import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PlayerListRelationFilter } from '../player/player-list-relation-filter.input';
import { AgentRebateListRelationFilter } from '../agent-rebate/agent-rebate-list-relation-filter.input';
import { AgentNullableRelationFilter } from '../prisma/agent-nullable-relation-filter.input';
import { AgentListRelationFilter } from './agent-list-relation-filter.input';

@InputType()
export class AgentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => String, {nullable:true})
    agent_name?: string;

    @Field(() => [AgentWhereInput], {nullable:true})
    AND?: Array<AgentWhereInput>;

    @Field(() => [AgentWhereInput], {nullable:true})
    OR?: Array<AgentWhereInput>;

    @Field(() => [AgentWhereInput], {nullable:true})
    NOT?: Array<AgentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    agent_password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parent_agent_id?: StringNullableFilter;

    @Field(() => PlayerListRelationFilter, {nullable:true})
    players?: PlayerListRelationFilter;

    @Field(() => AgentRebateListRelationFilter, {nullable:true})
    agent_rebates?: AgentRebateListRelationFilter;

    @Field(() => AgentNullableRelationFilter, {nullable:true})
    parent?: AgentNullableRelationFilter;

    @Field(() => AgentListRelationFilter, {nullable:true})
    children?: AgentListRelationFilter;
}
