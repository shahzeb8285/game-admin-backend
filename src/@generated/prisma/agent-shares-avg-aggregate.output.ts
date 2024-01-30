import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Agent_sharesAvgAggregate {

    @Field(() => Float, {nullable:true})
    shares?: number;
}
