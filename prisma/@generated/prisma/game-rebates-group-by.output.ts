import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Game_rebatesCountAggregate } from './game-rebates-count-aggregate.output';
import { Game_rebatesAvgAggregate } from './game-rebates-avg-aggregate.output';
import { Game_rebatesSumAggregate } from './game-rebates-sum-aggregate.output';
import { Game_rebatesMinAggregate } from './game-rebates-min-aggregate.output';
import { Game_rebatesMaxAggregate } from './game-rebates-max-aggregate.output';

@ObjectType()
export class Game_rebatesGroupBy {

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

    @Field(() => Game_rebatesCountAggregate, {nullable:true})
    _count?: Game_rebatesCountAggregate;

    @Field(() => Game_rebatesAvgAggregate, {nullable:true})
    _avg?: Game_rebatesAvgAggregate;

    @Field(() => Game_rebatesSumAggregate, {nullable:true})
    _sum?: Game_rebatesSumAggregate;

    @Field(() => Game_rebatesMinAggregate, {nullable:true})
    _min?: Game_rebatesMinAggregate;

    @Field(() => Game_rebatesMaxAggregate, {nullable:true})
    _max?: Game_rebatesMaxAggregate;
}
