import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Admin_accessesCount {

    @Field(() => Int, {nullable:false})
    role_accesses!: number;
}
