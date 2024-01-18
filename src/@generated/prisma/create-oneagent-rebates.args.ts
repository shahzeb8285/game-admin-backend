import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesCreateInput } from '../agent-rebates/agent-rebates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneagentRebatesArgs {

    @Field(() => agent_rebatesCreateInput, {nullable:false})
    @Type(() => agent_rebatesCreateInput)
    data!: agent_rebatesCreateInput;
}
