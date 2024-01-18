import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentCreateManyInput } from './agent-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAgentArgs {

    @Field(() => [AgentCreateManyInput], {nullable:false})
    @Type(() => AgentCreateManyInput)
    data!: Array<AgentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
