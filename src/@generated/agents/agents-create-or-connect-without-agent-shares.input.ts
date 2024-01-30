import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutAgent_sharesInput } from './agents-create-without-agent-shares.input';

@InputType()
export class agentsCreateOrConnectWithoutAgent_sharesInput {

    @Field(() => agentsWhereUniqueInput, {nullable:false})
    @Type(() => agentsWhereUniqueInput)
    where!: agentsWhereUniqueInput;

    @Field(() => agentsCreateWithoutAgent_sharesInput, {nullable:false})
    @Type(() => agentsCreateWithoutAgent_sharesInput)
    create!: agentsCreateWithoutAgent_sharesInput;
}
