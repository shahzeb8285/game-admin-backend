import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Player_default_rebate_ratesCountAggregate } from './player-default-rebate-rates-count-aggregate.output';
import { Player_default_rebate_ratesAvgAggregate } from './player-default-rebate-rates-avg-aggregate.output';
import { Player_default_rebate_ratesSumAggregate } from './player-default-rebate-rates-sum-aggregate.output';
import { Player_default_rebate_ratesMinAggregate } from './player-default-rebate-rates-min-aggregate.output';
import { Player_default_rebate_ratesMaxAggregate } from './player-default-rebate-rates-max-aggregate.output';

@ObjectType()
export class Player_default_rebate_ratesGroupBy {

    @Field(() => String, {nullable:false})
    player_default_rebate_rate_id!: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

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

    @Field(() => Player_default_rebate_ratesCountAggregate, {nullable:true})
    _count?: Player_default_rebate_ratesCountAggregate;

    @Field(() => Player_default_rebate_ratesAvgAggregate, {nullable:true})
    _avg?: Player_default_rebate_ratesAvgAggregate;

    @Field(() => Player_default_rebate_ratesSumAggregate, {nullable:true})
    _sum?: Player_default_rebate_ratesSumAggregate;

    @Field(() => Player_default_rebate_ratesMinAggregate, {nullable:true})
    _min?: Player_default_rebate_ratesMinAggregate;

    @Field(() => Player_default_rebate_ratesMaxAggregate, {nullable:true})
    _max?: Player_default_rebate_ratesMaxAggregate;
}
