import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesUpdateManyMutationInput } from '../agent-rebates/agent-rebates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { agent_rebatesWhereInput } from '../agent-rebates/agent-rebates-where.input';

@ArgsType()
export class UpdateManyagentRebatesArgs {

    @Field(() => agent_rebatesUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_rebatesUpdateManyMutationInput)
    data!: agent_rebatesUpdateManyMutationInput;

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    @Type(() => agent_rebatesWhereInput)
    where?: agent_rebatesWhereInput;
}
