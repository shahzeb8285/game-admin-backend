import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesWhereUniqueInput } from '../agent-shares/agent-shares-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueagentSharesArgs {

    @Field(() => agent_sharesWhereUniqueInput, {nullable:false})
    @Type(() => agent_sharesWhereUniqueInput)
    where!: agent_sharesWhereUniqueInput;
}
