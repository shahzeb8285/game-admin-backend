import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesCreateManyInput } from '../fl-categories/fl-categories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyflCategoriesArgs {

    @Field(() => [fl_categoriesCreateManyInput], {nullable:false})
    @Type(() => fl_categoriesCreateManyInput)
    data!: Array<fl_categoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
