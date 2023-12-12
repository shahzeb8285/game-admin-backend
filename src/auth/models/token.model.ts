import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';

@ObjectType()
export class Token {
  @Field(() => GraphQLJWT, { description: 'JWT access token' })
  access_token: string;

  @Field(() => GraphQLJWT, { description: 'JWT refresh token' })
  refresh_token: string;
}
