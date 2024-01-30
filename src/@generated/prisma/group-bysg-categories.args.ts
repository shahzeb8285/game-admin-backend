import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesWhereInput } from '../sg-categories/sg-categories-where.input';
import { Type } from 'class-transformer';
import { sg_categoriesOrderByWithAggregationInput } from '../sg-categories/sg-categories-order-by-with-aggregation.input';
import { Sg_categoriesScalarFieldEnum } from './sg-categories-scalar-field.enum';
import { sg_categoriesScalarWhereWithAggregatesInput } from '../sg-categories/sg-categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysgCategoriesArgs {

    @Field(() => sg_categoriesWhereInput, {nullable:true})
    @Type(() => sg_categoriesWhereInput)
    where?: sg_categoriesWhereInput;

    @Field(() => [sg_categoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sg_categoriesOrderByWithAggregationInput>;

    @Field(() => [Sg_categoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Sg_categoriesScalarFieldEnum>;

    @Field(() => sg_categoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: sg_categoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
