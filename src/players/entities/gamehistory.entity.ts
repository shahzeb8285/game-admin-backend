import { Field, Float } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserGameHistory {
   
    @Field(() => ID, {nullable:false})
    game_round_info_id: string;

    @Field(() => String, {nullable:false})
    player_id: string;


    @Field(() => String, {nullable:false})
    tg_id: string;

    @Field(() => String, {nullable:false})
    merchant_name: string;

    @Field(() => String, {nullable:false})
    category_name: string;

    @Field(() => String, {nullable:false})
    game_name: string;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;


    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;


    @Field(() => Float, {nullable:true})
    payout?: number;


    @Field(() => Boolean, {nullable:true})
    is_processed?: boolean;


    @Field(() => Date, {nullable:false})
    cdate!: Date;


    

   
}
