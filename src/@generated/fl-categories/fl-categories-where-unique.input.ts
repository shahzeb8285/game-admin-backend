import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from './fl-categories-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class fl_categoriesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    fl_categories_id?: string;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    AND?: Array<fl_categoriesWhereInput>;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    OR?: Array<fl_categoriesWhereInput>;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    NOT?: Array<fl_categoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    category_name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    csort?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rebate_priority?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
