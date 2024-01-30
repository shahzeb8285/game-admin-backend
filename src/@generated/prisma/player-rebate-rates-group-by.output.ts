import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Player_rebate_ratesCountAggregate } from './player-rebate-rates-count-aggregate.output';
import { Player_rebate_ratesAvgAggregate } from './player-rebate-rates-avg-aggregate.output';
import { Player_rebate_ratesSumAggregate } from './player-rebate-rates-sum-aggregate.output';
import { Player_rebate_ratesMinAggregate } from './player-rebate-rates-min-aggregate.output';
import { Player_rebate_ratesMaxAggregate } from './player-rebate-rates-max-aggregate.output';

@ObjectType()
export class Player_rebate_ratesGroupBy {

    @Field(() => String, {nullable:false})
    player_rebate_rate_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    rebate!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => Player_rebate_ratesCountAggregate, {nullable:true})
    _count?: Player_rebate_ratesCountAggregate;

    @Field(() => Player_rebate_ratesAvgAggregate, {nullable:true})
    _avg?: Player_rebate_ratesAvgAggregate;

    @Field(() => Player_rebate_ratesSumAggregate, {nullable:true})
    _sum?: Player_rebate_ratesSumAggregate;

    @Field(() => Player_rebate_ratesMinAggregate, {nullable:true})
    _min?: Player_rebate_ratesMinAggregate;

    @Field(() => Player_rebate_ratesMaxAggregate, {nullable:true})
    _max?: Player_rebate_ratesMaxAggregate;
}
