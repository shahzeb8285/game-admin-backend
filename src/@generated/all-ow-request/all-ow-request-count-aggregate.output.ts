import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AllOwRequestCountAggregate {

    @Field(() => Int, {nullable:false})
    allow_request_id!: number;

    @Field(() => Int, {nullable:false})
    request!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
