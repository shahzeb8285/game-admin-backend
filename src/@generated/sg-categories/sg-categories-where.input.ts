import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class sg_categoriesWhereInput {

    @Field(() => [sg_categoriesWhereInput], {nullable:true})
    AND?: Array<sg_categoriesWhereInput>;

    @Field(() => [sg_categoriesWhereInput], {nullable:true})
    OR?: Array<sg_categoriesWhereInput>;

    @Field(() => [sg_categoriesWhereInput], {nullable:true})
    NOT?: Array<sg_categoriesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sg_category_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    category_name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    csort?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
