import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class depositAmount {
  @Field(() => Float, { nullable: false })
  sum!: number;

  @Field(() => Date, { nullable: false })
  trans_date!: Date;
}
