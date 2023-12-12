import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { players } from '../players/players.model';
import { agent_rebates } from '../agent-rebates/agent-rebates.model';
import { AgentsCount } from '../prisma/agents-count.output';

@ObjectType()
export class agents {

    @Field(() => ID, {nullable:false})
    agent_id!: string;

    @Field(() => String, {nullable:false})
    agent_name!: string;

    @Field(() => String, {nullable:false})
    agent_password!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => String, {nullable:true})
    parent_agent_id!: string | null;

    @Field(() => [players], {nullable:true})
    players?: Array<players>;

    @Field(() => [agent_rebates], {nullable:true})
    agent_rebates?: Array<agent_rebates>;

    @Field(() => agents, {nullable:true})
    parent?: agents | null;

    @Field(() => [agents], {nullable:true})
    children?: Array<agents>;

    @Field(() => AgentsCount, {nullable:false})
    _count?: AgentsCount;
}
