import { registerEnumType } from '@nestjs/graphql';

export enum PlayerWalletScalarFieldEnum {
    player_wallet_id = "player_wallet_id",
    player_id_r = "player_id_r",
    currency = "currency",
    amount = "amount",
    frozen_amount = "frozen_amount",
    cdate = "cdate",
    udate = "udate"
}


registerEnumType(PlayerWalletScalarFieldEnum, { name: 'PlayerWalletScalarFieldEnum', description: undefined })
