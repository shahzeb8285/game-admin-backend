import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesWhereUniqueInput } from '../agent-rebates/agent-rebates-where-unique.input';
import { Type } from 'class-transformer';
import { agent_rebatesCreateInput } from '../agent-rebates/agent-rebates-create.input';
import { agent_rebatesUpdateInput } from '../agent-rebates/agent-rebates-update.input';

@ArgsType()
export class UpsertOneagentRebatesArgs {

    @Field(() => agent_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => agent_rebatesWhereUniqueInput)
    where!: agent_rebatesWhereUniqueInput;

    @Field(() => agent_rebatesCreateInput, {nullable:false})
    @Type(() => agent_rebatesCreateInput)
    create!: agent_rebatesCreateInput;

    @Field(() => agent_rebatesUpdateInput, {nullable:false})
    @Type(() => agent_rebatesUpdateInput)
    update!: agent_rebatesUpdateInput;
}
