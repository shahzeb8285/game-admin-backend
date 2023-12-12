import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutPlayersInput } from './agents-create-without-players.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutPlayersInput } from './agents-create-or-connect-without-players.input';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';

@InputType()
export class agentsCreateNestedOneWithoutPlayersInput {

    @Field(() => agentsCreateWithoutPlayersInput, {nullable:true})
    @Type(() => agentsCreateWithoutPlayersInput)
    create?: agentsCreateWithoutPlayersInput;

    @Field(() => agentsCreateOrConnectWithoutPlayersInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: agentsCreateOrConnectWithoutPlayersInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;
}
