import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutPlayersInput } from './agents-create-without-players.input';

@InputType()
export class agentsCreateOrConnectWithoutPlayersInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: Prisma.AtLeast<agentsWhereUniqueInput, 'agent_id' | 'agent_name'>;

    @Field(() => agentsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => agentsCreateWithoutPlayersInput)
    create!: agentsCreateWithoutPlayersInput;
}
