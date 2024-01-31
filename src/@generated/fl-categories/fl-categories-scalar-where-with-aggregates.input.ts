import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class fl_categoriesScalarWhereWithAggregatesInput {

    @Field(() => [fl_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<fl_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [fl_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<fl_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [fl_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<fl_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    fl_categories_id?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category_name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    csort?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    rebate_priority?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
