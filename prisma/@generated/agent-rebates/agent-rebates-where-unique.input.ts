import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesWhereInput } from './agent-rebates-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';

@InputType()
export class agent_rebatesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    agent_rebate_id?: string;

    @Field(() => [agent_rebatesWhereInput], {nullable:true})
    AND?: Array<agent_rebatesWhereInput>;

    @Field(() => [agent_rebatesWhereInput], {nullable:true})
    OR?: Array<agent_rebatesWhereInput>;

    @Field(() => [agent_rebatesWhereInput], {nullable:true})
    NOT?: Array<agent_rebatesWhereInput>;

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

    @Field(() => AgentsRelationFilter, {nullable:true})
    agents?: AgentsRelationFilter;
}
