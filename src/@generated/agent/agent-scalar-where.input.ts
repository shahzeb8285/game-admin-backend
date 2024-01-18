import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AgentScalarWhereInput {

    @Field(() => [AgentScalarWhereInput], {nullable:true})
    AND?: Array<AgentScalarWhereInput>;

    @Field(() => [AgentScalarWhereInput], {nullable:true})
    OR?: Array<AgentScalarWhereInput>;

    @Field(() => [AgentScalarWhereInput], {nullable:true})
    NOT?: Array<AgentScalarWhereInput>;

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
}
