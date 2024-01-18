import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Agent1 {
  
  @Field(() => String, {nullable:false})
  agent_id!: string;

  @Field(() => String, {nullable:false})
  agent_name!: string;

  @Field(() => String, {nullable:false})
  created_by!: string;

  @Field(() => Date, {nullable:false})
  cdate!: Date;

  @Field(() => Date, {nullable:false})
  udate!: Date;

  @Field(() => Boolean, {nullable:false,defaultValue:true})
  enabled!: boolean;

  @Field(() => String, {nullable:true})
  parent_agent_id!: string | null;

}
