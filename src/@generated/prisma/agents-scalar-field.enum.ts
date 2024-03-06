import { registerEnumType } from '@nestjs/graphql';

export enum AgentsScalarFieldEnum {
    agent_id = "agent_id",
    agent_name = "agent_name",
    agent_password = "agent_password",
    parent_agent_id = "parent_agent_id",
    created_by = "created_by",
    domain = "domain",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(AgentsScalarFieldEnum, { name: 'AgentsScalarFieldEnum', description: undefined })
