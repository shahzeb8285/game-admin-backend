import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_gamesCountAggregate {

    @Field(() => Int, {nullable:false})
    sg_game_id!: number;

    @Field(() => Int, {nullable:false})
    game_id!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    game_name!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Int, {nullable:false})
    sort!: number;

    @Field(() => Int, {nullable:false})
    page_code!: number;

    @Field(() => Int, {nullable:false})
    mobile_page_code!: number;

    @Field(() => Int, {nullable:false})
    rtp!: number;

    @Field(() => Int, {nullable:false})
    coun_rest_id!: number;

    @Field(() => Int, {nullable:false})
    external_code!: number;

    @Field(() => Int, {nullable:false})
    mobile_external_code!: number;

    @Field(() => Int, {nullable:false})
    table_id!: number;

    @Field(() => Int, {nullable:false})
    has_demo!: number;

    @Field(() => Int, {nullable:false})
    freeround!: number;

    @Field(() => Int, {nullable:false})
    bonus_buy!: number;

    @Field(() => Int, {nullable:false})
    megaways!: number;

    @Field(() => Int, {nullable:false})
    freespins!: number;

    @Field(() => Int, {nullable:false})
    min_bet_default!: number;

    @Field(() => Int, {nullable:false})
    max_bet_default!: number;

    @Field(() => Int, {nullable:false})
    max_multiplier!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
