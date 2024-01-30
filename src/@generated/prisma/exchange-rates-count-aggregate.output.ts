import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Exchange_ratesCountAggregate {

    @Field(() => Int, {nullable:false})
    exchange_rate_id!: number;

    @Field(() => Int, {nullable:false})
    real_currency!: number;

    @Field(() => Int, {nullable:false})
    game_currency!: number;

    @Field(() => Int, {nullable:false})
    game_per_real!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
