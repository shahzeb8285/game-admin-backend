import { Field, Float } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateGameRebateInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => [GameRebateInput], { nullable: false })
  rabates: [GameRebateInput];
}

@InputType()
export class GameRebateInput {
  @Field(() => Number, { nullable: false })
  categoryId: number;

  @Field(() => String, { nullable: true })
  previousRebateId: string;

  @Field(() => Float, { nullable: false })
  newRate: number;
}
