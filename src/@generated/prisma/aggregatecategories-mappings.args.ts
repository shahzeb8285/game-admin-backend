import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsWhereInput } from '../categories-mappings/categories-mappings-where.input';
import { Type } from 'class-transformer';
import { categories_mappingsOrderByWithRelationInput } from '../categories-mappings/categories-mappings-order-by-with-relation.input';
import { categories_mappingsWhereUniqueInput } from '../categories-mappings/categories-mappings-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatecategoriesMappingsArgs {

    @Field(() => categories_mappingsWhereInput, {nullable:true})
    @Type(() => categories_mappingsWhereInput)
    where?: categories_mappingsWhereInput;

    @Field(() => [categories_mappingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<categories_mappingsOrderByWithRelationInput>;

    @Field(() => categories_mappingsWhereUniqueInput, {nullable:true})
    cursor?: categories_mappingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
