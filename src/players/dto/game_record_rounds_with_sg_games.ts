import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { fl_categories } from 'src/@generated/fl-categories/fl-categories.model';
import { players } from 'src/@generated/players/players.model';
import { sg_games } from 'src/@generated/sg-games/sg-games.model';
import { sg_merchants } from 'src/@generated/sg-merchants/sg-merchants.model';

@ObjectType()
export class game_record_rounds_with_sg_games {
  @Field(() => ID, { nullable: false })
  game_round_info_id!: string;

  @Field(() => Date, { nullable: false })
  game_date!: Date;

  @Field(() => String, { nullable: false })
  game_url!: string;

  @Field(() => String, { nullable: false })
  player_id!: string;

  @Field(() => Int, { nullable: false })
  rebate_category_id!: number;

  @Field(() => Float, { nullable: false })
  bet_amount!: number;

  @Field(() => Float, { nullable: false })
  payout!: number;

  @Field(() => Float, { nullable: false })
  effective_bet_amount!: number;

  @Field(() => Boolean, { nullable: false })
  is_processed!: boolean;

  @Field(() => String, { nullable: false })
  game_records_by_period_id!: string;

  @Field(() => players, { nullable: false })
  players?: players;

  @Field(() => sg_games, { nullable: false })
  sg_games?: sg_games;

  @Field(() => sg_merchants, { nullable: false })
  sg_merchants?: sg_merchants;

  @Field(() => fl_categories, { nullable: false })
  fl_categories?: fl_categories;
}
