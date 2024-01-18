import { registerEnumType } from '@nestjs/graphql';

export enum Player_walletsScalarFieldEnum {
    player_wallet_id = "player_wallet_id",
    player_id_r = "player_id_r",
    currency = "currency",
    amount = "amount",
    frozen_amount = "frozen_amount",
    cdate = "cdate",
    udate = "udate"
}


registerEnumType(Player_walletsScalarFieldEnum, { name: 'Player_walletsScalarFieldEnum', description: undefined })
