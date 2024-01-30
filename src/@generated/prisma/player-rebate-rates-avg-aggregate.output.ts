import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Player_rebate_ratesAvgAggregate {

    @Field(() => Float, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    rebate?: number;
}
