import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesCreateInput } from '../fl-categories/fl-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneflCategoriesArgs {

    @Field(() => fl_categoriesCreateInput, {nullable:false})
    @Type(() => fl_categoriesCreateInput)
    data!: fl_categoriesCreateInput;
}
