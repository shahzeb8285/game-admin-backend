import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class categories_mappingsScalarWhereWithAggregatesInput {

    @Field(() => [categories_mappingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<categories_mappingsScalarWhereWithAggregatesInput>;

    @Field(() => [categories_mappingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<categories_mappingsScalarWhereWithAggregatesInput>;

    @Field(() => [categories_mappingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<categories_mappingsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    categories_mapping_id?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sg_category_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    fl_category_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
