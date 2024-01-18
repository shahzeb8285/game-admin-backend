import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GameHistory } from '../game-history/game-history.model';

@ObjectType()
export class GameRebate {

    @Field(() => ID, {nullable:false})
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
    cdate!: Date;

    @Field(() => GameHistory, {nullable:false})
    game_history?: GameHistory;
}
