import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Sg_gamesAvgAggregate {

    @Field(() => Float, {nullable:true})
    game_id?: number;

    @Field(() => Float, {nullable:true})
    merchant_id?: number;

    @Field(() => Float, {nullable:true})
    sort?: number;

    @Field(() => Float, {nullable:true})
    rtp?: number;

    @Field(() => Float, {nullable:true})
    coun_rest_id?: number;

    @Field(() => Float, {nullable:true})
    min_bet_default?: number;

    @Field(() => Float, {nullable:true})
    max_bet_default?: number;

    @Field(() => Float, {nullable:true})
    max_multiplier?: number;
}
