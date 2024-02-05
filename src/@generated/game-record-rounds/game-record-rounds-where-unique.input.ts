import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsGame_round_info_idGame_dateGame_urlPlayer_idRebate_category_idGame_records_by_period_idCompoundUniqueInput } from './game-record-rounds-game-round-info-id-game-date-game-url-player-id-rebate-category-id-game-records-by-period-id-compound-unique.input';
import { game_record_roundsWhereInput } from './game-record-rounds-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Game_round_infosRelationFilter } from '../prisma/game-round-infos-relation-filter.input';
import { Fl_categoriesRelationFilter } from '../prisma/fl-categories-relation-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class game_record_roundsWhereUniqueInput {

    @Field(() => game_record_roundsGame_round_info_idGame_dateGame_urlPlayer_idRebate_category_idGame_records_by_period_idCompoundUniqueInput, {nullable:true})
    game_round_info_id_game_date_game_url_player_id_rebate_category_id_game_records_by_period_id?: game_record_roundsGame_round_info_idGame_dateGame_urlPlayer_idRebate_category_idGame_records_by_period_idCompoundUniqueInput;

    @Field(() => [game_record_roundsWhereInput], {nullable:true})
    AND?: Array<game_record_roundsWhereInput>;

    @Field(() => [game_record_roundsWhereInput], {nullable:true})
    OR?: Array<game_record_roundsWhereInput>;

    @Field(() => [game_record_roundsWhereInput], {nullable:true})
    NOT?: Array<game_record_roundsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_round_info_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    game_date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    game_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rebate_category_id?: IntFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    bet_amount?: FloatNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    payout?: FloatFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    effective_bet_amount?: FloatNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_processed?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    game_records_by_period_id?: StringFilter;

    @Field(() => Game_round_infosRelationFilter, {nullable:true})
    game_round?: Game_round_infosRelationFilter;

    @Field(() => Fl_categoriesRelationFilter, {nullable:true})
    category?: Fl_categoriesRelationFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    player?: PlayersRelationFilter;
}
