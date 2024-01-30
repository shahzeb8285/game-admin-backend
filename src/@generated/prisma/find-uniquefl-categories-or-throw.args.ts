import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesWhereUniqueInput } from '../fl-categories/fl-categories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueflCategoriesOrThrowArgs {

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => fl_categoriesWhereUniqueInput)
    where!: fl_categoriesWhereUniqueInput;
}
