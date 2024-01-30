import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesWhereUniqueInput } from './agent-shares-where-unique.input';
import { Type } from 'class-transformer';
import { agent_sharesCreateWithoutAgentsInput } from './agent-shares-create-without-agents.input';

@InputType()
export class agent_sharesCreateOrConnectWithoutAgentsInput {

    @Field(() => agent_sharesWhereUniqueInput, {nullable:false})
    @Type(() => agent_sharesWhereUniqueInput)
    where!: agent_sharesWhereUniqueInput;

    @Field(() => agent_sharesCreateWithoutAgentsInput, {nullable:false})
    @Type(() => agent_sharesCreateWithoutAgentsInput)
    create!: agent_sharesCreateWithoutAgentsInput;
}
