import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Player } from '../player/player.model';
import { GameRebate } from '../game-rebate/game-rebate.model';

@ObjectType()
export class GameHistory {

    @Field(() => ID, {nullable:false})
    game_history_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => String, {nullable:false})
    i_gamedesc!: string;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;

    @Field(() => Float, {nullable:false})
    win_amount!: number;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Player, {nullable:false})
    players?: Player;

    @Field(() => [GameRebate], {nullable:true})
    game_rebates?: Array<GameRebate>;
}
