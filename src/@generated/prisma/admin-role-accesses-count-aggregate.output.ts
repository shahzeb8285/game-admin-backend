import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Admin_role_accessesCountAggregate {

    @Field(() => Int, {nullable:false})
    admin_role_access_id!: number;

    @Field(() => Int, {nullable:false})
    admin_role_id!: number;

    @Field(() => Int, {nullable:false})
    admin_access_id!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
