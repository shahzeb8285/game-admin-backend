import { registerEnumType } from '@nestjs/graphql';

export enum Agent_records_by_dayScalarFieldEnum {
    agent_records_by_day_id = "agent_records_by_day_id",
    game_records_by_day_id = "game_records_by_day_id",
    game_date = "game_date",
    player_id = "player_id",
    rebate_category_id = "rebate_category_id",
    agent_id = "agent_id",
    child_agent_id = "child_agent_id",
    effective_bet_amount = "effective_bet_amount",
    rebate_income = "rebate_income",
    rebate_expense = "rebate_expense",
    game_pnl_income = "game_pnl_income",
    game_pnl_expense = "game_pnl_expense",
    cdate = "cdate",
    udate = "udate",
    is_active = "is_active"
}


registerEnumType(Agent_records_by_dayScalarFieldEnum, { name: 'Agent_records_by_dayScalarFieldEnum', description: undefined })
