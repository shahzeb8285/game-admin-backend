import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Agent_rebatesAvgAggregate {

    @Field(() => Float, {nullable:true})
    rebate?: number;
}
