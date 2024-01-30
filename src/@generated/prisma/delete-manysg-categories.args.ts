import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesWhereInput } from '../sg-categories/sg-categories-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysgCategoriesArgs {

    @Field(() => sg_categoriesWhereInput, {nullable:true})
    @Type(() => sg_categoriesWhereInput)
    where?: sg_categoriesWhereInput;
}
