import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesUpdateInput } from '../agent-shares/agent-shares-update.input';
import { Type } from 'class-transformer';
import { agent_sharesWhereUniqueInput } from '../agent-shares/agent-shares-where-unique.input';

@ArgsType()
export class UpdateOneagentSharesArgs {

    @Field(() => agent_sharesUpdateInput, {nullable:false})
    @Type(() => agent_sharesUpdateInput)
    data!: agent_sharesUpdateInput;

    @Field(() => agent_sharesWhereUniqueInput, {nullable:false})
    @Type(() => agent_sharesWhereUniqueInput)
    where!: agent_sharesWhereUniqueInput;
}
