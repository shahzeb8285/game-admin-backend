import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { agents } from '../agents/agents.model';

@ObjectType()
export class agent_shares {

    @Field(() => ID, {nullable:false})
    agent_share_id!: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => Float, {nullable:false})
    shares!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => agents, {nullable:false})
    agents?: agents;
}
