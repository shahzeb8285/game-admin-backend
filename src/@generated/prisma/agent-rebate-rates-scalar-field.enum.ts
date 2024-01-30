import { registerEnumType } from '@nestjs/graphql';

export enum Agent_rebate_ratesScalarFieldEnum {
    agent_rebate_rate_id = "agent_rebate_rate_id",
    agent_id = "agent_id",
    rebate_category_id = "rebate_category_id",
    rebate = "rebate",
    created_by = "created_by",
    cdate = "cdate",
    is_active = "is_active"
}


registerEnumType(Agent_rebate_ratesScalarFieldEnum, { name: 'Agent_rebate_ratesScalarFieldEnum', description: undefined })
