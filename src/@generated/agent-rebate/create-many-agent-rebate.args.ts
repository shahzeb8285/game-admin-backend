import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateCreateManyInput } from './agent-rebate-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAgentRebateArgs {

    @Field(() => [AgentRebateCreateManyInput], {nullable:false})
    @Type(() => AgentRebateCreateManyInput)
    data!: Array<AgentRebateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
