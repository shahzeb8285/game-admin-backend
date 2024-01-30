import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsCreateManyInput } from '../categories-mappings/categories-mappings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycategoriesMappingsArgs {

    @Field(() => [categories_mappingsCreateManyInput], {nullable:false})
    @Type(() => categories_mappingsCreateManyInput)
    data!: Array<categories_mappingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
