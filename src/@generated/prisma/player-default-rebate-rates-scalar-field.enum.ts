import { registerEnumType } from '@nestjs/graphql';

export enum Player_default_rebate_ratesScalarFieldEnum {
    player_default_rebate_rate_id = "player_default_rebate_rate_id",
    agent_id = "agent_id",
    rebate_category_id = "rebate_category_id",
    rebate = "rebate",
    created_by = "created_by",
    cdate = "cdate",
    is_active = "is_active"
}


registerEnumType(Player_default_rebate_ratesScalarFieldEnum, { name: 'Player_default_rebate_ratesScalarFieldEnum', description: undefined })
