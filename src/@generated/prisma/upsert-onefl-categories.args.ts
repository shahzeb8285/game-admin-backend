import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesWhereUniqueInput } from '../fl-categories/fl-categories-where-unique.input';
import { Type } from 'class-transformer';
import { fl_categoriesCreateInput } from '../fl-categories/fl-categories-create.input';
import { fl_categoriesUpdateInput } from '../fl-categories/fl-categories-update.input';

@ArgsType()
export class UpsertOneflCategoriesArgs {

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => fl_categoriesWhereUniqueInput)
    where!: fl_categoriesWhereUniqueInput;

    @Field(() => fl_categoriesCreateInput, {nullable:false})
    @Type(() => fl_categoriesCreateInput)
    create!: fl_categoriesCreateInput;

    @Field(() => fl_categoriesUpdateInput, {nullable:false})
    @Type(() => fl_categoriesUpdateInput)
    update!: fl_categoriesUpdateInput;
}
