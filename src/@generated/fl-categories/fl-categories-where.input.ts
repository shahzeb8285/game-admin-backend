import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class fl_categoriesWhereInput {

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    AND?: Array<fl_categoriesWhereInput>;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    OR?: Array<fl_categoriesWhereInput>;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    NOT?: Array<fl_categoriesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    fl_categories_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    category_name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    csort?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rebate_priority?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
