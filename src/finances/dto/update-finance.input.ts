import { InputType, Field, } from '@nestjs/graphql';

@InputType()
export class UpdateFinanceInput {
  @Field(() => String)
  id: string;


  @Field(() => Boolean)
  is_enabled: boolean;
}
