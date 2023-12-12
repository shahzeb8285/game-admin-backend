import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Game_historyAvgAggregate {

    @Field(() => Float, {nullable:true})
    bet_amount?: number;

    @Field(() => Float, {nullable:true})
    win_amount?: number;
}
