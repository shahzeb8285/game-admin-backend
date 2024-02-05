import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from '../fl-categories/fl-categories-where.input';

@InputType()
export class Fl_categoriesRelationFilter {

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    is?: fl_categoriesWhereInput;

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    isNot?: fl_categoriesWhereInput;
}
