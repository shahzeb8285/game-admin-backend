import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from '../fl-categories/fl-categories-where.input';
import { Type } from 'class-transformer';
import { fl_categoriesOrderByWithAggregationInput } from '../fl-categories/fl-categories-order-by-with-aggregation.input';
import { Fl_categoriesScalarFieldEnum } from './fl-categories-scalar-field.enum';
import { fl_categoriesScalarWhereWithAggregatesInput } from '../fl-categories/fl-categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByflCategoriesArgs {

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    @Type(() => fl_categoriesWhereInput)
    where?: fl_categoriesWhereInput;

    @Field(() => [fl_categoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<fl_categoriesOrderByWithAggregationInput>;

    @Field(() => [Fl_categoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Fl_categoriesScalarFieldEnum>;

    @Field(() => fl_categoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: fl_categoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
