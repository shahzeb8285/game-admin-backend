import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebate_ratesWhereInput } from '../agent-rebate-rates/agent-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { agent_rebate_ratesOrderByWithRelationInput } from '../agent-rebate-rates/agent-rebate-rates-order-by-with-relation.input';
import { agent_rebate_ratesWhereUniqueInput } from '../agent-rebate-rates/agent-rebate-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Agent_rebate_ratesScalarFieldEnum } from './agent-rebate-rates-scalar-field.enum';

@ArgsType()
export class FindFirstagentRebateRatesOrThrowArgs {

    @Field(() => agent_rebate_ratesWhereInput, {nullable:true})
    @Type(() => agent_rebate_ratesWhereInput)
    where?: agent_rebate_ratesWhereInput;

    @Field(() => [agent_rebate_ratesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<agent_rebate_ratesOrderByWithRelationInput>;

    @Field(() => agent_rebate_ratesWhereUniqueInput, {nullable:true})
    cursor?: agent_rebate_ratesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Agent_rebate_ratesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Agent_rebate_ratesScalarFieldEnum>;
}
