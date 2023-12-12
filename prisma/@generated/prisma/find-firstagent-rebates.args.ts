import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesWhereInput } from '../agent-rebates/agent-rebates-where.input';
import { Type } from 'class-transformer';
import { agent_rebatesOrderByWithRelationInput } from '../agent-rebates/agent-rebates-order-by-with-relation.input';
import { agent_rebatesWhereUniqueInput } from '../agent-rebates/agent-rebates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Agent_rebatesScalarFieldEnum } from './agent-rebates-scalar-field.enum';

@ArgsType()
export class FindFirstagentRebatesArgs {

    @Field(() => agent_rebatesWhereInput, {nullable:true})
    @Type(() => agent_rebatesWhereInput)
    where?: agent_rebatesWhereInput;

    @Field(() => [agent_rebatesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<agent_rebatesOrderByWithRelationInput>;

    @Field(() => agent_rebatesWhereUniqueInput, {nullable:true})
    cursor?: agent_rebatesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Agent_rebatesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Agent_rebatesScalarFieldEnum>;
}
