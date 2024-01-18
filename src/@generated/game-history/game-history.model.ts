import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { players } from '../players/players.model';
import { game_rebates } from '../game-rebates/game-rebates.model';
import { Game_historyCount } from '../prisma/game-history-count.output';

@ObjectType()
export class game_history {

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

    @Field(() => players, {nullable:false})
    players?: players;

    @Field(() => [game_rebates], {nullable:true})
    game_rebates?: Array<game_rebates>;

    @Field(() => Game_historyCount, {nullable:false})
    _count?: Game_historyCount;
}
