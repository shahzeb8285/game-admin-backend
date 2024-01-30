import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsCreateInput } from '../categories-mappings/categories-mappings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecategoriesMappingsArgs {

    @Field(() => categories_mappingsCreateInput, {nullable:false})
    @Type(() => categories_mappingsCreateInput)
    data!: categories_mappingsCreateInput;
}
