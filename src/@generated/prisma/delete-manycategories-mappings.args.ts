import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsWhereInput } from '../categories-mappings/categories-mappings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycategoriesMappingsArgs {

    @Field(() => categories_mappingsWhereInput, {nullable:true})
    @Type(() => categories_mappingsWhereInput)
    where?: categories_mappingsWhereInput;
}
