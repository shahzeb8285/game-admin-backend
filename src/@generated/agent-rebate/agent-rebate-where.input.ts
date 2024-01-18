import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentRelationFilter } from '../agent/agent-relation-filter.input';

@InputType()
export class AgentRebateWhereInput {

    @Field(() => [AgentRebateWhereInput], {nullable:true})
    AND?: Array<AgentRebateWhereInput>;

    @Field(() => [AgentRebateWhereInput], {nullable:true})
    OR?: Array<AgentRebateWhereInput>;

    @Field(() => [AgentRebateWhereInput], {nullable:true})
    NOT?: Array<AgentRebateWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    agent_rebate_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from_date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    thru_date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_active?: BoolFilter;

    @Field(() => AgentRelationFilter, {nullable:true})
    agents?: AgentRelationFilter;
}
