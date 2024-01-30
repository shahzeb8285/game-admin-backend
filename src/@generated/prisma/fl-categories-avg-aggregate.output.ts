import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Fl_categoriesAvgAggregate {

    @Field(() => Float, {nullable:true})
    category_id?: number;

    @Field(() => Float, {nullable:true})
    csort?: number;

    @Field(() => Float, {nullable:true})
    rebate_priority?: number;
}
