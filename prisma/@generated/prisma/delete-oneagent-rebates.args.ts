import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesWhereUniqueInput } from '../agent-rebates/agent-rebates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneagentRebatesArgs {

    @Field(() => agent_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebatesWhereUniqueInput)
    where!: agent_rebatesWhereUniqueInput;
}
