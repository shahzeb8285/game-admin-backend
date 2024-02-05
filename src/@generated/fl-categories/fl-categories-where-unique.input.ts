import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from './fl-categories-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Game_record_roundsListRelationFilter } from '../prisma/game-record-rounds-list-relation-filter.input';

@InputType()
export class fl_categoriesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    fl_categories_id?: string;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    AND?: Array<fl_categoriesWhereInput>;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    OR?: Array<fl_categoriesWhereInput>;

    @Field(() => [fl_categoriesWhereInput], {nullable:true})
    NOT?: Array<fl_categoriesWhereInput>;

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

    @Field(() => Game_record_roundsListRelationFilter, {nullable:true})
    game_record_rounds?: Game_record_roundsListRelationFilter;
}
