import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { game_round_infos } from '../game-round-infos/game-round-infos.model';
import { fl_categories } from '../fl-categories/fl-categories.model';
import { players } from '../players/players.model';

@ObjectType()
export class game_record_rounds {

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    bet_amount!: number;

    @Field(() => Float, {nullable:false})
    payout!: number;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Boolean, {nullable:false})
    is_processed!: boolean;

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;

    @Field(() => game_round_infos, {nullable:false})
    game_round?: game_round_infos;

    @Field(() => fl_categories, {nullable:false})
    category?: fl_categories;

    @Field(() => players, {nullable:false})
    player?: players;
}
