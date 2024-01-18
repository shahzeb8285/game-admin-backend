import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export  class CountDto {
  
  @Field(() => Number, {nullable:false})
  counts: number;
}
