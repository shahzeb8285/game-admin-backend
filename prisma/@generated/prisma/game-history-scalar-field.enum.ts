import { registerEnumType } from '@nestjs/graphql';

export enum Game_historyScalarFieldEnum {
    game_history_id = "game_history_id",
    game_id = "game_id",
    player_id_r = "player_id_r",
    i_gamedesc = "i_gamedesc",
    bet_amount = "bet_amount",
    win_amount = "win_amount",
    transaction_date = "transaction_date",
    cdate = "cdate"
}


registerEnumType(Game_historyScalarFieldEnum, { name: 'Game_historyScalarFieldEnum', description: undefined })
