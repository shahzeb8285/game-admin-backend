import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgentCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    agent_id?: true;

    @Field(() => Boolean, {nullable:true})
    agent_name?: true;

    @Field(() => Boolean, {nullable:true})
    agent_password?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    udate?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    parent_agent_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
