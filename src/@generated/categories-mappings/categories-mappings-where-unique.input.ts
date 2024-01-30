import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categories_mappingsWhereInput } from './categories-mappings-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class categories_mappingsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    categories_mapping_id?: string;

    @Field(() => [categories_mappingsWhereInput], {nullable:true})
    AND?: Array<categories_mappingsWhereInput>;

    @Field(() => [categories_mappingsWhereInput], {nullable:true})
    OR?: Array<categories_mappingsWhereInput>;

    @Field(() => [categories_mappingsWhereInput], {nullable:true})
    NOT?: Array<categories_mappingsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    sg_category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    fl_category_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
