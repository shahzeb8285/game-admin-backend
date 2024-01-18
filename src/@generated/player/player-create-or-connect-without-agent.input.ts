import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutAgentInput } from './player-create-without-agent.input';

@InputType()
export class PlayerCreateOrConnectWithoutAgentInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: PlayerWhereUniqueInput;

    @Field(() => PlayerCreateWithoutAgentInput, {nullable:false})
    @Type(() => PlayerCreateWithoutAgentInput)
    create!: PlayerCreateWithoutAgentInput;
}
