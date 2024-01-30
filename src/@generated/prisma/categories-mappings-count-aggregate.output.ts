import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Categories_mappingsCountAggregate {

    @Field(() => Int, {nullable:false})
    categories_mapping_id!: number;

    @Field(() => Int, {nullable:false})
    sg_category_id!: number;

    @Field(() => Int, {nullable:false})
    fl_category_id!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
