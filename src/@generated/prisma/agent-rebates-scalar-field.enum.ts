import { registerEnumType } from '@nestjs/graphql';

export enum Agent_rebatesScalarFieldEnum {
    agent_rebate_id = "agent_rebate_id",
    agent_id_r = "agent_id_r",
    game_id = "game_id",
    rebate = "rebate",
    created_by = "created_by",
    from_date = "from_date",
    thru_date = "thru_date",
    is_active = "is_active"
}


registerEnumType(Agent_rebatesScalarFieldEnum, { name: 'Agent_rebatesScalarFieldEnum', description: undefined })
