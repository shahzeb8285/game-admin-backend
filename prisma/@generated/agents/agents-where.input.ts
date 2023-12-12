import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PlayersListRelationFilter } from '../prisma/players-list-relation-filter.input';
import { Agent_rebatesListRelationFilter } from '../prisma/agent-rebates-list-relation-filter.input';
import { AgentsNullableRelationFilter } from '../prisma/agents-nullable-relation-filter.input';
import { AgentsListRelationFilter } from '../prisma/agents-list-relation-filter.input';

@InputType()
export class agentsWhereInput {

    @Field(() => [agentsWhereInput], {nullable:true})
    AND?: Array<agentsWhereInput>;

    @Field(() => [agentsWhereInput], {nullable:true})
    OR?: Array<agentsWhereInput>;

    @Field(() => [agentsWhereInput], {nullable:true})
    NOT?: Array<agentsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_name?: StringFilter;

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

    @Field(() => PlayersListRelationFilter, {nullable:true})
    players?: PlayersListRelationFilter;

    @Field(() => Agent_rebatesListRelationFilter, {nullable:true})
    agent_rebates?: Agent_rebatesListRelationFilter;

    @Field(() => AgentsNullableRelationFilter, {nullable:true})
    parent?: AgentsNullableRelationFilter;

    @Field(() => AgentsListRelationFilter, {nullable:true})
    children?: AgentsListRelationFilter;
}
