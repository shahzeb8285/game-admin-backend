import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Sg_gamesCountAggregate } from './sg-games-count-aggregate.output';
import { Sg_gamesAvgAggregate } from './sg-games-avg-aggregate.output';
import { Sg_gamesSumAggregate } from './sg-games-sum-aggregate.output';
import { Sg_gamesMinAggregate } from './sg-games-min-aggregate.output';
import { Sg_gamesMaxAggregate } from './sg-games-max-aggregate.output';

@ObjectType()
export class Sg_gamesGroupBy {

    @Field(() => String, {nullable:false})
    sg_game_id!: string;

    @Field(() => Int, {nullable:false})
    game_id!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    game_name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    category_id!: string;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Int, {nullable:false})
    sort!: number;

    @Field(() => String, {nullable:false})
    page_code!: string;

    @Field(() => String, {nullable:true})
    mobile_page_code?: string;

    @Field(() => Float, {nullable:true})
    rtp?: number;

    @Field(() => Int, {nullable:false})
    coun_rest_id!: number;

    @Field(() => String, {nullable:true})
    external_code?: string;

    @Field(() => String, {nullable:true})
    mobile_external_code?: string;

    @Field(() => String, {nullable:false})
    table_id!: string;

    @Field(() => Boolean, {nullable:false})
    has_demo!: boolean;

    @Field(() => Boolean, {nullable:false})
    freeround!: boolean;

    @Field(() => Boolean, {nullable:false})
    bonus_buy!: boolean;

    @Field(() => Boolean, {nullable:false})
    megaways!: boolean;

    @Field(() => Boolean, {nullable:false})
    freespins!: boolean;

    @Field(() => Float, {nullable:true})
    min_bet_default?: number;

    @Field(() => Float, {nullable:true})
    max_bet_default?: number;

    @Field(() => Float, {nullable:true})
    max_multiplier?: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Sg_gamesCountAggregate, {nullable:true})
    _count?: Sg_gamesCountAggregate;

    @Field(() => Sg_gamesAvgAggregate, {nullable:true})
    _avg?: Sg_gamesAvgAggregate;

    @Field(() => Sg_gamesSumAggregate, {nullable:true})
    _sum?: Sg_gamesSumAggregate;

    @Field(() => Sg_gamesMinAggregate, {nullable:true})
    _min?: Sg_gamesMinAggregate;

    @Field(() => Sg_gamesMaxAggregate, {nullable:true})
    _max?: Sg_gamesMaxAggregate;
}
