import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Categories_mappingsAvgAggregate {

    @Field(() => Float, {nullable:true})
    sg_category_id?: number;

    @Field(() => Float, {nullable:true})
    fl_category_id?: number;
}
