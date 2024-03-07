import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class statsAmount {
  @Field(() => Float, { nullable: true })
  sum!: number;
  @Field(() => Float, { nullable: true })
  transaction_count!: number;

  @Field(() => Date, { nullable: true })
  trans_date!: Date;
  @Field(() => Date, { nullable: true })
  reg_date!: Date;
}
