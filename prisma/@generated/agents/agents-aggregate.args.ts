import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsOrderByWithRelationInput } from './agents-order-by-with-relation.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class agentsAggregateArgs {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => [agentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<agentsOrderByWithRelationInput>;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    cursor?: agentsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
