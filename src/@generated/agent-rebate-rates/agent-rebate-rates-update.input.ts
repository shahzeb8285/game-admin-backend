import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { agentsUpdateOneRequiredWithoutAgent_rebate_ratesNestedInput } from '../agents/agents-update-one-required-without-agent-rebate-rates-nested.input';

@InputType()
export class agent_rebate_ratesUpdateInput {

    @Field(() => String, {nullable:true})
    agent_rebate_rate_id?: string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    rebate?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;

    @Field(() => agentsUpdateOneRequiredWithoutAgent_rebate_ratesNestedInput, {nullable:true})
    agents?: agentsUpdateOneRequiredWithoutAgent_rebate_ratesNestedInput;
}
