import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class agentsScalarWhereInput {

    @Field(() => [agentsScalarWhereInput], {nullable:true})
    AND?: Array<agentsScalarWhereInput>;

    @Field(() => [agentsScalarWhereInput], {nullable:true})
    OR?: Array<agentsScalarWhereInput>;

    @Field(() => [agentsScalarWhereInput], {nullable:true})
    NOT?: Array<agentsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    agent_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_name?: StringFilter;

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
}
