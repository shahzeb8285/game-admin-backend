import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class agent_sharesScalarWhereWithAggregatesInput {

    @Field(() => [agent_sharesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<agent_sharesScalarWhereWithAggregatesInput>;

    @Field(() => [agent_sharesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<agent_sharesScalarWhereWithAggregatesInput>;

    @Field(() => [agent_sharesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<agent_sharesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    agent_share_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    agent_id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    shares?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_active?: BoolWithAggregatesFilter;
}
