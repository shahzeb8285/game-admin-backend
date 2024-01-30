import { registerEnumType } from '@nestjs/graphql';

export enum Player_rebate_ratesScalarFieldEnum {
    player_rebate_rate_id = "player_rebate_rate_id",
    player_id = "player_id",
    rebate_category_id = "rebate_category_id",
    rebate = "rebate",
    created_by = "created_by",
    cdate = "cdate",
    is_active = "is_active"
}


registerEnumType(Player_rebate_ratesScalarFieldEnum, { name: 'Player_rebate_ratesScalarFieldEnum', description: undefined })
