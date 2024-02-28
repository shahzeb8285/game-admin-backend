import { Field, ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AgentShareEntity   {
    @Field(() => Float, {nullable:false})
    shares: number;
}
