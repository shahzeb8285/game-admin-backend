import { registerEnumType } from '@nestjs/graphql';

export enum Agent_sharesScalarFieldEnum {
    agent_share_id = "agent_share_id",
    agent_id = "agent_id",
    shares = "shares",
    created_by = "created_by",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled",
    is_active = "is_active"
}


registerEnumType(Agent_sharesScalarFieldEnum, { name: 'Agent_sharesScalarFieldEnum', description: undefined })
