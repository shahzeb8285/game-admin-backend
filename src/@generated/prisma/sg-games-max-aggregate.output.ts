import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Sg_gamesMaxAggregate {

    @Field(() => String, {nullable:true})
    sg_game_id?: string;

    @Field(() => Int, {nullable:true})
    game_id?: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    game_name?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    category_id?: string;

    @Field(() => Int, {nullable:true})
    merchant_id?: number;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    page_code?: string;

    @Field(() => String, {nullable:true})
    mobile_page_code?: string;

    @Field(() => Float, {nullable:true})
    rtp?: number;

    @Field(() => Int, {nullable:true})
    coun_rest_id?: number;

    @Field(() => String, {nullable:true})
    external_code?: string;

    @Field(() => String, {nullable:true})
    mobile_external_code?: string;

    @Field(() => String, {nullable:true})
    table_id?: string;

    @Field(() => Boolean, {nullable:true})
    has_demo?: boolean;

    @Field(() => Boolean, {nullable:true})
    freeround?: boolean;

    @Field(() => Boolean, {nullable:true})
    bonus_buy?: boolean;

    @Field(() => Boolean, {nullable:true})
    megaways?: boolean;

    @Field(() => Boolean, {nullable:true})
    freespins?: boolean;

    @Field(() => Float, {nullable:true})
    min_bet_default?: number;

    @Field(() => Float, {nullable:true})
    max_bet_default?: number;

    @Field(() => Float, {nullable:true})
    max_multiplier?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
