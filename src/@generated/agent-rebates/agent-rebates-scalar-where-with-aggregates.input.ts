import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class agent_rebatesScalarWhereWithAggregatesInput {

    @Field(() => [agent_rebatesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<agent_rebatesScalarWhereWithAggregatesInput>;

    @Field(() => [agent_rebatesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<agent_rebatesScalarWhereWithAggregatesInput>;

    @Field(() => [agent_rebatesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<agent_rebatesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    agent_rebate_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    agent_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rebate?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    from_date?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    thru_date?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_active?: BoolWithAggregatesFilter;
}
