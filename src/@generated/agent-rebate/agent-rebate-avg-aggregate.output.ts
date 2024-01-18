import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AgentRebateAvgAggregate {

    @Field(() => Float, {nullable:true})
    rebate?: number;
}
