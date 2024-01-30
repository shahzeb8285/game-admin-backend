import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesUpdateInput } from '../fl-categories/fl-categories-update.input';
import { Type } from 'class-transformer';
import { fl_categoriesWhereUniqueInput } from '../fl-categories/fl-categories-where-unique.input';

@ArgsType()
export class UpdateOneflCategoriesArgs {

    @Field(() => fl_categoriesUpdateInput, {nullable:false})
    @Type(() => fl_categoriesUpdateInput)
    data!: fl_categoriesUpdateInput;

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => fl_categoriesWhereUniqueInput)
    where!: fl_categoriesWhereUniqueInput;
}
