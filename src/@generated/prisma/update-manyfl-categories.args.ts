import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesUpdateManyMutationInput } from '../fl-categories/fl-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { fl_categoriesWhereInput } from '../fl-categories/fl-categories-where.input';

@ArgsType()
export class UpdateManyflCategoriesArgs {

    @Field(() => fl_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => fl_categoriesUpdateManyMutationInput)
    data!: fl_categoriesUpdateManyMutationInput;

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    @Type(() => fl_categoriesWhereInput)
    where?: fl_categoriesWhereInput;
}
