import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_sharesCreateManyAgentsInput } from './agent-shares-create-many-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class agent_sharesCreateManyAgentsInputEnvelope {

    @Field(() => [agent_sharesCreateManyAgentsInput], {nullable:false})
    @Type(() => agent_sharesCreateManyAgentsInput)
    data!: Array<agent_sharesCreateManyAgentsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
