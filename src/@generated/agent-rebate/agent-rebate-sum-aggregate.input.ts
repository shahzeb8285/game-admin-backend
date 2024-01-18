import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgentRebateSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rebate?: true;
}
