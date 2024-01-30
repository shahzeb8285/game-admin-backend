import { registerEnumType } from '@nestjs/graphql';

export enum Game_records_by_periodScalarFieldEnum {
    game_records_by_period_id = "game_records_by_period_id",
    game_date = "game_date",
    game_url = "game_url",
    player_id = "player_id",
    rebate_category_id = "rebate_category_id",
    effective_bet_amount = "effective_bet_amount",
    pnl = "pnl",
    rebate_amount = "rebate_amount",
    rebate_status = "rebate_status"
}


registerEnumType(Game_records_by_periodScalarFieldEnum, { name: 'Game_records_by_periodScalarFieldEnum', description: undefined })
