import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesWhereUniqueInput } from './agent-rebates-where-unique.input';
import { Type } from 'class-transformer';
import { agent_rebatesCreateWithoutAgentsInput } from './agent-rebates-create-without-agents.input';

@InputType()
export class agent_rebatesCreateOrConnectWithoutAgentsInput {

    @Field(() => agent_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebatesWhereUniqueInput)
    where!: agent_rebatesWhereUniqueInput;

    @Field(() => agent_rebatesCreateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_rebatesCreateWithoutAgentsInput)
    create!: agent_rebatesCreateWithoutAgentsInput;
}
