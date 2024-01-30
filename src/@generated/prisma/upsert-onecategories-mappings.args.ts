import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsWhereUniqueInput } from '../categories-mappings/categories-mappings-where-unique.input';
import { Type } from 'class-transformer';
import { categories_mappingsCreateInput } from '../categories-mappings/categories-mappings-create.input';
import { categories_mappingsUpdateInput } from '../categories-mappings/categories-mappings-update.input';

@ArgsType()
export class UpsertOnecategoriesMappingsArgs {

    @Field(() => categories_mappingsWhereUniqueInput, {nullable:false})
    @Type(() => categories_mappingsWhereUniqueInput)
    where!: categories_mappingsWhereUniqueInput;

    @Field(() => categories_mappingsCreateInput, {nullable:false})
    @Type(() => categories_mappingsCreateInput)
    create!: categories_mappingsCreateInput;

    @Field(() => categories_mappingsUpdateInput, {nullable:false})
    @Type(() => categories_mappingsUpdateInput)
    update!: categories_mappingsUpdateInput;
}
