import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutPlayersInput } from './agent-create-without-players.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutPlayersInput } from './agent-create-or-connect-without-players.input';
import { AgentUpsertWithoutPlayersInput } from './agent-upsert-without-players.input';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { AgentUpdateToOneWithWhereWithoutPlayersInput } from './agent-update-to-one-with-where-without-players.input';

@InputType()
export class AgentUpdateOneRequiredWithoutPlayersNestedInput {

    @Field(() => AgentCreateWithoutPlayersInput, {nullable:true})
    @Type(() => AgentCreateWithoutPlayersInput)
    create?: AgentCreateWithoutPlayersInput;

    @Field(() => AgentCreateOrConnectWithoutPlayersInput, {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: AgentCreateOrConnectWithoutPlayersInput;

    @Field(() => AgentUpsertWithoutPlayersInput, {nullable:true})
    @Type(() => AgentUpsertWithoutPlayersInput)
    upsert?: AgentUpsertWithoutPlayersInput;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: AgentWhereUniqueInput;

    @Field(() => AgentUpdateToOneWithWhereWithoutPlayersInput, {nullable:true})
    @Type(() => AgentUpdateToOneWithWhereWithoutPlayersInput)
    update?: AgentUpdateToOneWithWhereWithoutPlayersInput;
}
