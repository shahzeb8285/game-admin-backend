import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgentRebateMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    agent_rebate_id?: true;

    @Field(() => Boolean, {nullable:true})
    agent_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    game_id?: true;

    @Field(() => Boolean, {nullable:true})
    rebate?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    from_date?: true;

    @Field(() => Boolean, {nullable:true})
    thru_date?: true;

    @Field(() => Boolean, {nullable:true})
    is_active?: true;
}
