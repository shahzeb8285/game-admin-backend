import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutAgentInput } from './players-create-without-agent.input';

@InputType()
export class playersCreateOrConnectWithoutAgentInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutAgentInput, {nullable:false})
    @Type(() => playersCreateWithoutAgentInput)
    create!: playersCreateWithoutAgentInput;
}
