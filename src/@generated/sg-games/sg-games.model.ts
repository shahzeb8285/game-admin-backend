import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class sg_games {

    @Field(() => ID, {nullable:false})
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

    @Field(() => String, {nullable:false})
    mobile_page_code!: string;

    @Field(() => Float, {nullable:false})
    rtp!: number;

    @Field(() => Int, {nullable:false})
    coun_rest_id!: number;

    @Field(() => String, {nullable:false})
    external_code!: string;

    @Field(() => String, {nullable:false})
    mobile_external_code!: string;

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

    @Field(() => Float, {nullable:false})
    min_bet_default!: number;

    @Field(() => Float, {nullable:false})
    max_bet_default!: number;

    @Field(() => Float, {nullable:false})
    max_multiplier!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;
}
