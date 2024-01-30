import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesUpdateManyMutationInput } from '../sg-categories/sg-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { sg_categoriesWhereInput } from '../sg-categories/sg-categories-where.input';

@ArgsType()
export class UpdateManysgCategoriesArgs {

    @Field(() => sg_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => sg_categoriesUpdateManyMutationInput)
    data!: sg_categoriesUpdateManyMutationInput;

    @Field(() => sg_categoriesWhereInput, {nullable:true})
    @Type(() => sg_categoriesWhereInput)
    where?: sg_categoriesWhereInput;
}
