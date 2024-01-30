import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_sharesInput } from './agents-create-without-agent-shares.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_sharesInput } from './agents-create-or-connect-without-agent-shares.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@InputType()
export class agentsCreateNestedOneWithoutAgent_sharesInput {

    @Field(() => agentsCreateWithoutAgent_sharesInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_sharesInput)
    create?: agentsCreateWithoutAgent_sharesInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_sharesInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_sharesInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_sharesInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;
}
