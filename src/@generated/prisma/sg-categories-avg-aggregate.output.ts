import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Sg_categoriesAvgAggregate {

    @Field(() => Float, {nullable:true})
    category_id?: number;

    @Field(() => Float, {nullable:true})
    csort?: number;
}
