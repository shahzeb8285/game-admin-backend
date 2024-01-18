import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminRoleAccessesCountAggregate {

    @Field(() => Int, {nullable:false})
    admin_role_id!: number;

    @Field(() => Int, {nullable:false})
    admin_access_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
