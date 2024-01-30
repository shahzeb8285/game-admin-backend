import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_categoriesSumAggregate {

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => Int, {nullable:true})
    csort?: number;
}
