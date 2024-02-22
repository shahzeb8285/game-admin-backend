import { InputType, Int, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class RebateShareInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Number, { nullable: false })
  newShare: number;

}
