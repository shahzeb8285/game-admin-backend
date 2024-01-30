import { registerEnumType } from '@nestjs/graphql';

export enum Game_records_by_dayScalarFieldEnum {
    game_records_by_day_id = "game_records_by_day_id",
    game_date = "game_date",
    player_id = "player_id",
    rebate_category_id = "rebate_category_id",
    effective_bet_amount = "effective_bet_amount",
    pnl = "pnl",
    rebate_amount = "rebate_amount",
    cdate = "cdate",
    udate = "udate",
    is_active = "is_active"
}


registerEnumType(Game_records_by_dayScalarFieldEnum, { name: 'Game_records_by_dayScalarFieldEnum', description: undefined })
