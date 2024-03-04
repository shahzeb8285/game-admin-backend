import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class statsAmount {
  @Field(() => Float, { nullable: false })
  sum!: number;
}
