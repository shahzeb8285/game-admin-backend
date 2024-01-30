import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from '../fl-categories/fl-categories-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyflCategoriesArgs {

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    @Type(() => fl_categoriesWhereInput)
    where?: fl_categoriesWhereInput;
}
