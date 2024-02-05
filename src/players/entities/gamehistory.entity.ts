import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserGameHistory {

    @Field(() => ID, {nullable:false})
    game_round_info_id: string;

    @Field(() => String, {nullable:false})
    username: string;


    @Field(() => String, {nullable:false})
    system_name: string;

    @Field(() => String, {nullable:false})
    game_category: string;

    @Field(() => String, {nullable:false})
    game_name: string;

    @Field(() => Int, {nullable:false})
    bet_amount!: number;

    @Field(() => Int, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => String, {nullable:true})
    bet_result: string;

 
  


    @Field(() => String, {nullable:false})
    status: string;

    @Field(() => Int, {nullable:false})
    bet_time!: Date;

  

    

   
}
