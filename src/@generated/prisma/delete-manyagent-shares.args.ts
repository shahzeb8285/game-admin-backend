import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesWhereInput } from '../agent-shares/agent-shares-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyagentSharesArgs {

    @Field(() => agent_sharesWhereInput, {nullable:true})
    @Type(() => agent_sharesWhereInput)
    where?: agent_sharesWhereInput;
}
