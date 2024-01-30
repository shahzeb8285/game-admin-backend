import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { agents } from '../agents/agents.model';

@ObjectType()
export class agent_rebate_rates {

    @Field(() => ID, {nullable:false})
    agent_rebate_rate_id!: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    rebate!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => agents, {nullable:false})
    agents?: agents;
}
