import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AgentsCount {

    @Field(() => Int, {nullable:false})
    children!: number;

    @Field(() => Int, {nullable:false})
    players!: number;

    @Field(() => Int, {nullable:false})
    agent_rebate_rates!: number;

    @Field(() => Int, {nullable:false})
    agent_shares!: number;

    @Field(() => Int, {nullable:false})
    agent_records_by_day!: number;
}
