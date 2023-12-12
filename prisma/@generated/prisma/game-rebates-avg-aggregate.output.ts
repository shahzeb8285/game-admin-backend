import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Game_rebatesAvgAggregate {

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Float, {nullable:true})
    rebate_amount?: number;
}
