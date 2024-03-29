import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Admin_rolesCountAggregate {

    @Field(() => Int, {nullable:false})
    admin_role_id!: number;

    @Field(() => Int, {nullable:false})
    admin_role_name!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
