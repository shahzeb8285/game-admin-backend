import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class banks {
  @Field(() => String, { nullable: false })
  bank_name!: string;
}
