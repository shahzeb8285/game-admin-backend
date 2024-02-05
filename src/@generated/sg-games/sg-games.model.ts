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

    @Field(() => Int, {nullable:true})
    sort!: number | null;

    @Field(() => String, {nullable:true})
    page_code!: string | null;

    @Field(() => String, {nullable:true})
    mobile_page_code!: string | null;

    @Field(() => Float, {nullable:true})
    rtp!: number | null;

    @Field(() => Int, {nullable:true})
    coun_rest_id!: number | null;

    @Field(() => String, {nullable:true})
    external_code!: string | null;

    @Field(() => String, {nullable:true})
    mobile_external_code!: string | null;

    @Field(() => String, {nullable:true})
    table_id!: string | null;

    @Field(() => Boolean, {nullable:true})
    has_demo!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    freeround!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    bonus_buy!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    megaways!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    freespins!: boolean | null;

    @Field(() => Float, {nullable:true})
    min_bet_default!: number | null;

    @Field(() => Float, {nullable:true})
    max_bet_default!: number | null;

    @Field(() => Float, {nullable:true})
    max_multiplier!: number | null;

    @Field(() => Date, {nullable:true})
    cdate!: Date | null;

    @Field(() => Date, {nullable:true})
    udate!: Date | null;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    enabled!: boolean | null;
}
