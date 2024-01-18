import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebatesCreateManyAgentsInput } from './agent-rebates-create-many-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class agent_rebatesCreateManyAgentsInputEnvelope {

    @Field(() => [agent_rebatesCreateManyAgentsInput], {nullable:false})
    @Type(() => agent_rebatesCreateManyAgentsInput)
    data!: Array<agent_rebatesCreateManyAgentsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
