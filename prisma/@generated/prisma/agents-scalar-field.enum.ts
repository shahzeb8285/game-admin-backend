import { registerEnumType } from '@nestjs/graphql';

export enum AgentsScalarFieldEnum {
    agent_id = "agent_id",
    agent_name = "agent_name",
    agent_password = "agent_password",
    created_by = "created_by",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled",
    parent_agent_id = "parent_agent_id"
}


registerEnumType(AgentsScalarFieldEnum, { name: 'AgentsScalarFieldEnum', description: undefined })
