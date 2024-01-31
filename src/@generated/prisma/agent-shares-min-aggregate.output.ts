import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Agent_sharesMinAggregate {

    @Field(() => String, {nullable:true})
    agent_share_id?: string;

    @Field(() => String, {nullable:true})
    agent_id?: string;

    @Field(() => Float, {nullable:true})
    shares?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;
}
