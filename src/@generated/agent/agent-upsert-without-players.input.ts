import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentUpdateWithoutPlayersInput } from './agent-update-without-players.input';
import { Type } from 'class-transformer';
import { AgentCreateWithoutPlayersInput } from './agent-create-without-players.input';
import { AgentWhereInput } from './agent-where.input';

@InputType()
export class AgentUpsertWithoutPlayersInput {

    @Field(() => AgentUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => AgentUpdateWithoutPlayersInput)
    update!: AgentUpdateWithoutPlayersInput;

    @Field(() => AgentCreateWithoutPlayersInput, {nullable:false})
    @Type(() => AgentCreateWithoutPlayersInput)
    create!: AgentCreateWithoutPlayersInput;

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;
}
