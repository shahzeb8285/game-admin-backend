import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesUpdateInput } from '../agent-rebates/agent-rebates-update.input';
import { Type } from 'class-transformer';
import { agent_rebatesWhereUniqueInput } from '../agent-rebates/agent-rebates-where-unique.input';

@ArgsType()
export class UpdateOneagentRebatesArgs {

    @Field(() => agent_rebatesUpdateInput, {nullable:false})
    @Type(() => agent_rebatesUpdateInput)
    data!: agent_rebatesUpdateInput;

    @Field(() => agent_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebatesWhereUniqueInput)
    where!: agent_rebatesWhereUniqueInput;
}
