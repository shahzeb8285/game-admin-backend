import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateWithoutAgent_rebatesInput } from './agent-create-without-agent-rebates.input';
import { Type } from 'class-transformer';
import { AgentCreateOrConnectWithoutAgent_rebatesInput } from './agent-create-or-connect-without-agent-rebates.input';
import { AgentUpsertWithoutAgent_rebatesInput } from './agent-upsert-without-agent-rebates.input';
import { AgentWhereUniqueInput } from './agent-where-unique.input';
import { AgentUpdateToOneWithWhereWithoutAgent_rebatesInput } from './agent-update-to-one-with-where-without-agent-rebates.input';

@InputType()
export class AgentUpdateOneRequiredWithoutAgent_rebatesNestedInput {

    @Field(() => AgentCreateWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => AgentCreateWithoutAgent_rebatesInput)
    create?: AgentCreateWithoutAgent_rebatesInput;

    @Field(() => AgentCreateOrConnectWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => AgentCreateOrConnectWithoutAgent_rebatesInput)
    connectOrCreate?: AgentCreateOrConnectWithoutAgent_rebatesInput;

    @Field(() => AgentUpsertWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => AgentUpsertWithoutAgent_rebatesInput)
    upsert?: AgentUpsertWithoutAgent_rebatesInput;

    @Field(() => AgentWhereUniqueInput, {nullable:true})
    @Type(() => AgentWhereUniqueInput)
    connect?: AgentWhereUniqueInput;

    @Field(() => AgentUpdateToOneWithWhereWithoutAgent_rebatesInput, {nullable:true})
    @Type(() => AgentUpdateToOneWithWhereWithoutAgent_rebatesInput)
    update?: AgentUpdateToOneWithWhereWithoutAgent_rebatesInput;
}
