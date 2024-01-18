import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesWhereUniqueInput } from './agent-rebates-where-unique.input';
import { Type } from 'class-transformer';
import { agent_rebatesUpdateWithoutAgentsInput } from './agent-rebates-update-without-agents.input';

@InputType()
export class agent_rebatesUpdateWithWhereUniqueWithoutAgentsInput {

    @Field(() => agent_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebatesWhereUniqueInput)
    where!: agent_rebatesWhereUniqueInput;

    @Field(() => agent_rebatesUpdateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_rebatesUpdateWithoutAgentsInput)
    data!: agent_rebatesUpdateWithoutAgentsInput;
}
