import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_rebate_ratesCreateManyAgentsInput } from './agent-rebate-rates-create-many-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class agent_rebate_ratesCreateManyAgentsInputEnvelope {

    @Field(() => [agent_rebate_ratesCreateManyAgentsInput], {nullable:false})
    @Type(() => agent_rebate_ratesCreateManyAgentsInput)
    data!: Array<agent_rebate_ratesCreateManyAgentsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
