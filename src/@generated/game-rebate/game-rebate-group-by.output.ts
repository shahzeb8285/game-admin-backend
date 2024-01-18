import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GameRebateCountAggregate } from './game-rebate-count-aggregate.output';
import { GameRebateAvgAggregate } from './game-rebate-avg-aggregate.output';
import { GameRebateSumAggregate } from './game-rebate-sum-aggregate.output';
import { GameRebateMinAggregate } from './game-rebate-min-aggregate.output';
import { GameRebateMaxAggregate } from './game-rebate-max-aggregate.output';

@ObjectType()
export class GameRebateGroupBy {

    @Field(() => String, {nullable:false})
    game_rebates_id!: string;

    @Field(() => String, {nullable:false})
    game_history_id!: string;

    @Field(() => String, {nullable:false})
    merchant_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    rebate_amount!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => GameRebateCountAggregate, {nullable:true})
    _count?: GameRebateCountAggregate;

    @Field(() => GameRebateAvgAggregate, {nullable:true})
    _avg?: GameRebateAvgAggregate;

    @Field(() => GameRebateSumAggregate, {nullable:true})
    _sum?: GameRebateSumAggregate;

    @Field(() => GameRebateMinAggregate, {nullable:true})
    _min?: GameRebateMinAggregate;

    @Field(() => GameRebateMaxAggregate, {nullable:true})
    _max?: GameRebateMaxAggregate;
}
