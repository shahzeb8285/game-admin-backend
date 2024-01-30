import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { agentsCreateNestedOneWithoutAgent_rebate_ratesInput } from '../agents/agents-create-nested-one-without-agent-rebate-rates.input';

@InputType()
export class agent_rebate_ratesCreateInput {

    @Field(() => String, {nullable:true})
    agent_rebate_rate_id?: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    rebate!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => agentsCreateNestedOneWithoutAgent_rebate_ratesInput, {nullable:false})
    agents!: agentsCreateNestedOneWithoutAgent_rebate_ratesInput;
}
