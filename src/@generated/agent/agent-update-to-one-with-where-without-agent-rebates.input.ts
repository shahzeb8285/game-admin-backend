import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';
import { AgentUpdateWithoutAgent_rebatesInput } from './agent-update-without-agent-rebates.input';

@InputType()
export class AgentUpdateToOneWithWhereWithoutAgent_rebatesInput {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;

    @Field(() => AgentUpdateWithoutAgent_rebatesInput, {nullable:false})
    @Type(() => AgentUpdateWithoutAgent_rebatesInput)
    data!: AgentUpdateWithoutAgent_rebatesInput;
}
