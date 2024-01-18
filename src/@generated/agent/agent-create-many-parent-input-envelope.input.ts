import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentCreateManyParentInput } from './agent-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class AgentCreateManyParentInputEnvelope {

    @Field(() => [AgentCreateManyParentInput], {nullable:false})
    @Type(() => AgentCreateManyParentInput)
    data!: Array<AgentCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
