import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesWhereUniqueInput } from './agent-shares-where-unique.input';
import { Type } from 'class-transformer';
import { agent_sharesUpdateWithoutAgentsInput } from './agent-shares-update-without-agents.input';

@InputType()
export class agent_sharesUpdateWithWhereUniqueWithoutAgentsInput {

    @Field(() => agent_sharesWhereUniqueInput, {nullable:false})
    @Type(() => agent_sharesWhereUniqueInput)
    where!: agent_sharesWhereUniqueInput;

    @Field(() => agent_sharesUpdateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_sharesUpdateWithoutAgentsInput)
    data!: agent_sharesUpdateWithoutAgentsInput;
}
