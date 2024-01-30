import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesCreateInput } from '../sg-categories/sg-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesgCategoriesArgs {

    @Field(() => sg_categoriesCreateInput, {nullable:false})
    @Type(() => sg_categoriesCreateInput)
    data!: sg_categoriesCreateInput;
}
