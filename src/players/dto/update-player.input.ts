import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlayerInput  {
  


  @Field(() => String, {nullable:false})
  user_id!: string;

  @Field(() => Boolean, {nullable:true})
  enabled?: boolean;
}
