import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentWhereInput } from './agent-where.input';
import { Type } from 'class-transformer';
import { AgentUpdateWithoutPlayersInput } from './agent-update-without-players.input';

@InputType()
export class AgentUpdateToOneWithWhereWithoutPlayersInput {

    @Field(() => AgentWhereInput, {nullable:true})
    @Type(() => AgentWhereInput)
    where?: AgentWhereInput;

    @Field(() => AgentUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => AgentUpdateWithoutPlayersInput)
    data!: AgentUpdateWithoutPlayersInput;
}
