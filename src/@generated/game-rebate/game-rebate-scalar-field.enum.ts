import { registerEnumType } from '@nestjs/graphql';

export enum GameRebateScalarFieldEnum {
    game_rebates_id = "game_rebates_id",
    game_history_id = "game_history_id",
    merchant_id = "merchant_id",
    game_id = "game_id",
    category = "category",
    effective_bet_amount = "effective_bet_amount",
    rebate_amount = "rebate_amount",
    status = "status",
    cdate = "cdate"
}


registerEnumType(GameRebateScalarFieldEnum, { name: 'GameRebateScalarFieldEnum', description: undefined })
