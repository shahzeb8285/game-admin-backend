import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesWhereInput } from '../agent-rebates/agent-rebates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyagentRebatesArgs {

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    @Type(() => agent_rebatesWhereInput)
    where?: agent_rebatesWhereInput;
}
