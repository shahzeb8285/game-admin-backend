import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsWhereInput } from '../categories-mappings/categories-mappings-where.input';
import { Type } from 'class-transformer';
import { categories_mappingsOrderByWithAggregationInput } from '../categories-mappings/categories-mappings-order-by-with-aggregation.input';
import { Categories_mappingsScalarFieldEnum } from './categories-mappings-scalar-field.enum';
import { categories_mappingsScalarWhereWithAggregatesInput } from '../categories-mappings/categories-mappings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycategoriesMappingsArgs {

    @Field(() => categories_mappingsWhereInput, {nullable:true})
    @Type(() => categories_mappingsWhereInput)
    where?: categories_mappingsWhereInput;

    @Field(() => [categories_mappingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<categories_mappingsOrderByWithAggregationInput>;

    @Field(() => [Categories_mappingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Categories_mappingsScalarFieldEnum>;

    @Field(() => categories_mappingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: categories_mappingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
