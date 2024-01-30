import { registerEnumType } from '@nestjs/graphql';

export enum Game_round_infosScalarFieldEnum {
    game_round_info_id = "game_round_info_id",
    game_id = "game_id",
    player_id = "player_id",
    i_gamedesc = "i_gamedesc",
    i_extparam = "i_extparam",
    game_extra = "game_extra",
    cdate = "cdate"
}


registerEnumType(Game_round_infosScalarFieldEnum, { name: 'Game_round_infosScalarFieldEnum', description: undefined })
