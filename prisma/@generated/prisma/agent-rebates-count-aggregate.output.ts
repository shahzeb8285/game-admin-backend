import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Agent_rebatesCountAggregate {

    @Field(() => Int, {nullable:false})
    agent_rebate_id!: number;

    @Field(() => Int, {nullable:false})
    agent_id_r!: number;

    @Field(() => Int, {nullable:false})
    game_id!: number;

    @Field(() => Int, {nullable:false})
    rebate!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    from_date!: number;

    @Field(() => Int, {nullable:false})
    thru_date!: number;

    @Field(() => Int, {nullable:false})
    is_active!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
