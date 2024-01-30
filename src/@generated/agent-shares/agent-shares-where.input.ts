import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';

@InputType()
export class agent_sharesWhereInput {

    @Field(() => [agent_sharesWhereInput], {nullable:true})
    AND?: Array<agent_sharesWhereInput>;

    @Field(() => [agent_sharesWhereInput], {nullable:true})
    OR?: Array<agent_sharesWhereInput>;

    @Field(() => [agent_sharesWhereInput], {nullable:true})
    NOT?: Array<agent_sharesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    agent_share_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    shares?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_active?: BoolFilter;

    @Field(() => AgentsRelationFilter, {nullable:true})
    agents?: AgentsRelationFilter;
}
