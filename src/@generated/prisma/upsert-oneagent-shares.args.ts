import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesWhereUniqueInput } from '../agent-shares/agent-shares-where-unique.input';
import { Type } from 'class-transformer';
import { agent_sharesCreateInput } from '../agent-shares/agent-shares-create.input';
import { agent_sharesUpdateInput } from '../agent-shares/agent-shares-update.input';

@ArgsType()
export class UpsertOneagentSharesArgs {

    @Field(() => agent_sharesWhereUniqueInput, {nullable:false})
    @Type(() => agent_sharesWhereUniqueInput)
    where!: agent_sharesWhereUniqueInput;

    @Field(() => agent_sharesCreateInput, {nullable:false})
    @Type(() => agent_sharesCreateInput)
    create!: agent_sharesCreateInput;

    @Field(() => agent_sharesUpdateInput, {nullable:false})
    @Type(() => agent_sharesUpdateInput)
    update!: agent_sharesUpdateInput;
}
