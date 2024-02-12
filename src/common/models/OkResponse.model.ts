import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OkResponse {

   
    @Field(() => String, { nullable: false })
    message!: string;
    
}
