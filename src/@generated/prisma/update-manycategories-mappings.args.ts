import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categories_mappingsUpdateManyMutationInput } from '../categories-mappings/categories-mappings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { categories_mappingsWhereInput } from '../categories-mappings/categories-mappings-where.input';

@ArgsType()
export class UpdateManycategoriesMappingsArgs {

    @Field(() => categories_mappingsUpdateManyMutationInput, {nullable:false})
    @Type(() => categories_mappingsUpdateManyMutationInput)
    data!: categories_mappingsUpdateManyMutationInput;

    @Field(() => categories_mappingsWhereInput, {nullable:true})
    @Type(() => categories_mappingsWhereInput)
    where?: categories_mappingsWhereInput;
}
