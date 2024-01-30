import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesWhereUniqueInput } from '../sg-categories/sg-categories-where-unique.input';
import { Type } from 'class-transformer';
import { sg_categoriesCreateInput } from '../sg-categories/sg-categories-create.input';
import { sg_categoriesUpdateInput } from '../sg-categories/sg-categories-update.input';

@ArgsType()
export class UpsertOnesgCategoriesArgs {

    @Field(() => sg_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => sg_categoriesWhereUniqueInput)
    where!: sg_categoriesWhereUniqueInput;

    @Field(() => sg_categoriesCreateInput, {nullable:false})
    @Type(() => sg_categoriesCreateInput)
    create!: sg_categoriesCreateInput;

    @Field(() => sg_categoriesUpdateInput, {nullable:false})
    @Type(() => sg_categoriesUpdateInput)
    update!: sg_categoriesUpdateInput;
}
