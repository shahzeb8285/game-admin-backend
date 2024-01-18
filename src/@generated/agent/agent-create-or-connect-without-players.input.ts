import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutPlayersInput } from './agent-create-without-players.input';

@InputType()
export class AgentCreateOrConnectWithoutPlayersInput {

    @Field(() => AgentWhereUniqueInput, {nullable:false})
    @Type(() => AgentWhereUniqueInput)
    where!: AgentWhereUniqueInput;

    @Field(() => AgentCreateWithoutPlayersInput, {nullable:false})
    @Type(() => AgentCreateWithoutPlayersInput)
    create!: AgentCreateWithoutPlayersInput;
}
