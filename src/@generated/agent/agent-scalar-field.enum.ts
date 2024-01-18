import { registerEnumType } from '@nestjs/graphql';

export enum AgentScalarFieldEnum {
    agent_id = "agent_id",
    agent_name = "agent_name",
    agent_password = "agent_password",
    created_by = "created_by",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled",
    parent_agent_id = "parent_agent_id"
}


registerEnumType(AgentScalarFieldEnum, { name: 'AgentScalarFieldEnum', description: undefined })
