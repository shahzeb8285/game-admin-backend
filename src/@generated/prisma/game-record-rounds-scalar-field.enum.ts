import { registerEnumType } from '@nestjs/graphql';

export enum Game_record_roundsScalarFieldEnum {
    game_round_info_id = "game_round_info_id",
    game_date = "game_date",
    game_url = "game_url",
    player_id = "player_id",
    rebate_category_id = "rebate_category_id",
    bet_amount = "bet_amount",
    payout = "payout",
    effective_bet_amount = "effective_bet_amount",
    is_processed = "is_processed",
    game_records_by_period_id = "game_records_by_period_id"
}


registerEnumType(Game_record_roundsScalarFieldEnum, { name: 'Game_record_roundsScalarFieldEnum', description: undefined })
