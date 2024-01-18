import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminRoleCount {

    @Field(() => Int, {nullable:false})
    admins?: number;

    @Field(() => Int, {nullable:false})
    role_accesses?: number;
}
