import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateManyAgentInput } from './players-create-many-agent.input';
import { Type } from 'class-transformer';

@InputType()
export class playersCreateManyAgentInputEnvelope {

    @Field(() => [playersCreateManyAgentInput], {nullable:false})
    @Type(() => playersCreateManyAgentInput)
    data!: Array<playersCreateManyAgentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
