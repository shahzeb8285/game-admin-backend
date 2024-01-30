import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from '../fl-categories/fl-categories-where.input';
import { Type } from 'class-transformer';
import { fl_categoriesOrderByWithRelationInput } from '../fl-categories/fl-categories-order-by-with-relation.input';
import { fl_categoriesWhereUniqueInput } from '../fl-categories/fl-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Fl_categoriesScalarFieldEnum } from './fl-categories-scalar-field.enum';

@ArgsType()
export class FindManyflCategoriesArgs {

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    @Type(() => fl_categoriesWhereInput)
    where?: fl_categoriesWhereInput;

    @Field(() => [fl_categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<fl_categoriesOrderByWithRelationInput>;

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:true})
    cursor?: fl_categoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Fl_categoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Fl_categoriesScalarFieldEnum>;
}
