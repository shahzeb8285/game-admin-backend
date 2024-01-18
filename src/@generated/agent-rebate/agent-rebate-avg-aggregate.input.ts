import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgentRebateAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rebate?: true;
}
