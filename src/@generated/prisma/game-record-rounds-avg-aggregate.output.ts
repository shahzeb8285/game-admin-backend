import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Game_record_roundsAvgAggregate {

    @Field(() => Float, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    bet_amount?: number;

    @Field(() => Float, {nullable:true})
    payout?: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;
}
