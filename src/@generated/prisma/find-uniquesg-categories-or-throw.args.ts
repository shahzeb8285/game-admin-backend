import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesWhereUniqueInput } from '../sg-categories/sg-categories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquesgCategoriesOrThrowArgs {

    @Field(() => sg_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => sg_categoriesWhereUniqueInput)
    where!: sg_categoriesWhereUniqueInput;
}
