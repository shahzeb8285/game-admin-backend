import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Agent_rebatesMaxAggregate {

    @Field(() => String, {nullable:true})
    agent_rebate_id?: string;

    @Field(() => String, {nullable:true})
    agent_id_r?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => Float, {nullable:true})
    rebate?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    from_date?: Date | string;

    @Field(() => Date, {nullable:true})
    thru_date?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;
}
