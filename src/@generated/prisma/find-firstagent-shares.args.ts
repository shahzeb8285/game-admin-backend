import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesWhereInput } from '../agent-shares/agent-shares-where.input';
import { Type } from 'class-transformer';
import { agent_sharesOrderByWithRelationInput } from '../agent-shares/agent-shares-order-by-with-relation.input';
import { agent_sharesWhereUniqueInput } from '../agent-shares/agent-shares-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Agent_sharesScalarFieldEnum } from './agent-shares-scalar-field.enum';

@ArgsType()
export class FindFirstagentSharesArgs {

    @Field(() => agent_sharesWhereInput, {nullable:true})
    @Type(() => agent_sharesWhereInput)
    where?: agent_sharesWhereInput;

    @Field(() => [agent_sharesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<agent_sharesOrderByWithRelationInput>;

    @Field(() => agent_sharesWhereUniqueInput, {nullable:true})
    cursor?: agent_sharesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Agent_sharesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Agent_sharesScalarFieldEnum>;
}
