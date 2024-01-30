import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesCreateManyInput } from '../sg-categories/sg-categories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManysgCategoriesArgs {

    @Field(() => [sg_categoriesCreateManyInput], {nullable:false})
    @Type(() => sg_categoriesCreateManyInput)
    data!: Array<sg_categoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
