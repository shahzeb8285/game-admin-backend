import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Agent_rebate_ratesCountAggregate {

    @Field(() => Int, {nullable:false})
    agent_rebate_rate_id!: number;

    @Field(() => Int, {nullable:false})
    agent_id!: number;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Int, {nullable:false})
    rebate!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    is_active!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
