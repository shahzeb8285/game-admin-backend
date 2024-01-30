import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsWhereUniqueInput } from '../categories-mappings/categories-mappings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecategoriesMappingsArgs {

    @Field(() => categories_mappingsWhereUniqueInput, {nullable:false})
    @Type(() => categories_mappingsWhereUniqueInput)
    where!: categories_mappingsWhereUniqueInput;
}
