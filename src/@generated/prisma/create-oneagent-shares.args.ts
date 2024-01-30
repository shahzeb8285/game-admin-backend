import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesCreateInput } from '../agent-shares/agent-shares-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneagentSharesArgs {

    @Field(() => agent_sharesCreateInput, {nullable:false})
    @Type(() => agent_sharesCreateInput)
    data!: agent_sharesCreateInput;
}
