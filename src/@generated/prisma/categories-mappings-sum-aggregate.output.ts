import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Categories_mappingsSumAggregate {

    @Field(() => Int, {nullable:true})
    sg_category_id?: number;

    @Field(() => Int, {nullable:true})
    fl_category_id?: number;
}
