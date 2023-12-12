import { CreateAgentInput } from './create-agent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAgentInput  {
  
  @Field(() => String)
  agent_id: String;


  @Field(() => String, {nullable:true})
  agent_password?: string;

  @Field(() => String, {nullable:true})
  agent_name?: string;


  @Field(() => Boolean, {nullable:true})
  enabled?: boolean;


}
