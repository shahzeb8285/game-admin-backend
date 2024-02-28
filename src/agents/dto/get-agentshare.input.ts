import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class GetAgentShareInput {
 
  @Field(() => String, {nullable:false})
  agentId!: string;
}


@InputType()
export class UpdateAgentShareInput {
 
  @Field(() => String, {nullable:false})
  agentId: string;

  @Field(() => Float, {nullable:false})
  share: number;


}
