import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RebateShare {

    @Field(() => Number, {nullable:false})
    parent_rebate?: number;
    
    @Field(() => Number, {nullable:false})
    agent_rebate?: number;

    @Field(() => String, {nullable:true})
    agent_id: string;


}
