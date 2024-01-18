import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentRebateWhereInput } from './agent-rebate-where.input';
import { Type } from 'class-transformer';
import { AgentRebateOrderByWithRelationInput } from './agent-rebate-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AgentRebateWhereUniqueInput } from './agent-rebate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgentRebateScalarFieldEnum } from './agent-rebate-scalar-field.enum';

@ArgsType()
export class FindManyAgentRebateArgs {

    @Field(() => AgentRebateWhereInput, {nullable:true})
    @Type(() => AgentRebateWhereInput)
    where?: AgentRebateWhereInput;

    @Field(() => [AgentRebateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AgentRebateOrderByWithRelationInput>;

    @Field(() => AgentRebateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AgentRebateWhereUniqueInput, 'agent_rebate_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AgentRebateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AgentRebateScalarFieldEnum>;
}
