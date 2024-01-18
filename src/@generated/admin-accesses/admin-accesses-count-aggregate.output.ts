import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminAccessesCountAggregate {

    @Field(() => Int, {nullable:false})
    admin_access_id!: number;

    @Field(() => Int, {nullable:false})
    access_name!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
