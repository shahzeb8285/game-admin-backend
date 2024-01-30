import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchants_currenciesCountAggregate {

    @Field(() => Int, {nullable:false})
    sg_merchants_currency_id!: number;

    @Field(() => Int, {nullable:false})
    merchants_currency_id!: number;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Int, {nullable:false})
    currencies!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    udate!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
