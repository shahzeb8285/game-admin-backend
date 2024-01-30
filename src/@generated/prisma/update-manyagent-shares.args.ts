import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesUpdateManyMutationInput } from '../agent-shares/agent-shares-update-many-mutation.input';
import { Type } from 'class-transformer';
import { agent_sharesWhereInput } from '../agent-shares/agent-shares-where.input';

@ArgsType()
export class UpdateManyagentSharesArgs {

    @Field(() => agent_sharesUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_sharesUpdateManyMutationInput)
    data!: agent_sharesUpdateManyMutationInput;

    @Field(() => agent_sharesWhereInput, {nullable:true})
    @Type(() => agent_sharesWhereInput)
    where?: agent_sharesWhereInput;
}
