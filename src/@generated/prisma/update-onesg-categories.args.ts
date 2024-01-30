import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesUpdateInput } from '../sg-categories/sg-categories-update.input';
import { Type } from 'class-transformer';
import { sg_categoriesWhereUniqueInput } from '../sg-categories/sg-categories-where-unique.input';

@ArgsType()
export class UpdateOnesgCategoriesArgs {

    @Field(() => sg_categoriesUpdateInput, {nullable:false})
    @Type(() => sg_categoriesUpdateInput)
    data!: sg_categoriesUpdateInput;

    @Field(() => sg_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => sg_categoriesWhereUniqueInput)
    where!: sg_categoriesWhereUniqueInput;
}
