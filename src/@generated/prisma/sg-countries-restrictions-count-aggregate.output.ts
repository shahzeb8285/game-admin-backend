import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_countries_restrictionsCountAggregate {

    @Field(() => Int, {nullable:false})
    sg_coun_rest_id!: number;

    @Field(() => Int, {nullable:false})
    coun_rest_id!: number;

    @Field(() => Int, {nullable:false})
    coun_rest_name!: number;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Int, {nullable:false})
    countries!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
