import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Agent_rebate_ratesSumAggregate {

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    rebate?: number;
}
