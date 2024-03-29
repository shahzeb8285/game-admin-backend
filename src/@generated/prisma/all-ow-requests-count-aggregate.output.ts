import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class All_ow_requestsCountAggregate {

    @Field(() => Int, {nullable:false})
    all_ow_request_id!: number;

    @Field(() => Int, {nullable:false})
    request!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
