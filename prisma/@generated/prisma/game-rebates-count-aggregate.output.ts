import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_rebatesCountAggregate {

    @Field(() => Int, {nullable:false})
    game_rebates_id!: number;

    @Field(() => Int, {nullable:false})
    game_history_id!: number;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Int, {nullable:false})
    game_id!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Int, {nullable:false})
    rebate_amount!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
