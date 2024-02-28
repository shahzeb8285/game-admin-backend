import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class GetAgentShareInput {
 
  @Field(() => String, {nullable:false})
  agentId!: string;
}


@InputType()
export class UpdateAgentShareInput {
 
  @Field(() => String, {nullable:false})
  agentId: string;

  @Field(() => Number, {nullable:false})
  share: number;


}
