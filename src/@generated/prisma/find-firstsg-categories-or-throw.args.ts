import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_categoriesWhereInput } from '../sg-categories/sg-categories-where.input';
import { Type } from 'class-transformer';
import { sg_categoriesOrderByWithRelationInput } from '../sg-categories/sg-categories-order-by-with-relation.input';
import { sg_categoriesWhereUniqueInput } from '../sg-categories/sg-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Sg_categoriesScalarFieldEnum } from './sg-categories-scalar-field.enum';

@ArgsType()
export class FindFirstsgCategoriesOrThrowArgs {

    @Field(() => sg_categoriesWhereInput, {nullable:true})
    @Type(() => sg_categoriesWhereInput)
    where?: sg_categoriesWhereInput;

    @Field(() => [sg_categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sg_categoriesOrderByWithRelationInput>;

    @Field(() => sg_categoriesWhereUniqueInput, {nullable:true})
    cursor?: sg_categoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Sg_categoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Sg_categoriesScalarFieldEnum>;
}
