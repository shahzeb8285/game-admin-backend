import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Exchange_ratesAvgAggregate {

    @Field(() => Float, {nullable:true})
    game_per_real?: number;
}
