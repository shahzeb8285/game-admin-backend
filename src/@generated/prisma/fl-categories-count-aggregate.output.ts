import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Fl_categoriesCountAggregate {

    @Field(() => Int, {nullable:false})
    fl_categories_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    category_name!: number;

    @Field(() => Int, {nullable:false})
    csort!: number;

    @Field(() => Int, {nullable:false})
    rebate_priority!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
