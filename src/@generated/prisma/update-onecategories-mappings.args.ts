import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsUpdateInput } from '../categories-mappings/categories-mappings-update.input';
import { Type } from 'class-transformer';
import { categories_mappingsWhereUniqueInput } from '../categories-mappings/categories-mappings-where-unique.input';

@ArgsType()
export class UpdateOnecategoriesMappingsArgs {

    @Field(() => categories_mappingsUpdateInput, {nullable:false})
    @Type(() => categories_mappingsUpdateInput)
    data!: categories_mappingsUpdateInput;

    @Field(() => categories_mappingsWhereUniqueInput, {nullable:false})
    @Type(() => categories_mappingsWhereUniqueInput)
    where!: categories_mappingsWhereUniqueInput;
}
