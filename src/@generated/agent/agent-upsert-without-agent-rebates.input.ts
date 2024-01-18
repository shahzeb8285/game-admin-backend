import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentUpdateWithoutAgent_rebatesInput } from './agent-update-without-agent-rebates.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutAgent_rebatesInput } from './agent-create-without-agent-rebates.input';
import { AgentWhereInput } from './agent-where.input';

@InputType()
export class AgentUpsertWithoutAgent_rebatesInput {

    @Field(() => AgentUpdateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => AgentUpdateWithoutAgent_rebatesInput)
    update!: AgentUpdateWithoutAgent_rebatesInput;

    @Field(() => AgentCreateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => AgentCreateWithoutAgent_rebatesInput)
    create!: AgentCreateWithoutAgent_rebatesInput;

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;
}
