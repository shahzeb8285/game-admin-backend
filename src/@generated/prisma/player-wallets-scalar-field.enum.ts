import { registerEnumType } from '@nestjs/graphql';

export enum Player_walletsScalarFieldEnum {
    player_wallet_id = "player_wallet_id",
    player_id = "player_id",
    currency = "currency",
    amount = "amount",
    frozen_amount = "frozen_amount",
    cdate = "cdate",
    udate = "udate"
}


registerEnumType(Player_walletsScalarFieldEnum, { name: 'Player_walletsScalarFieldEnum', description: undefined })
