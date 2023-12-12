import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAgentInput {
 
  @Field(() => String, {nullable:false})
  agent_name!: string;

  @Field(() => String, {nullable:false})
  agent_password!: string;

  @Field(() => String, {nullable:true})
  parent_agent_id?: string;

}
