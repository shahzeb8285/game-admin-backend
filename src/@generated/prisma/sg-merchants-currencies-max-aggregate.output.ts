import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchants_currenciesMaxAggregate {

    @Field(() => String, {nullable:true})
    sg_merchants_currency_id?: string;

    @Field(() => Int, {nullable:true})
    merchants_currency_id?: number;

    @Field(() => Int, {nullable:true})
    merchant_id?: number;

    @Field(() => String, {nullable:true})
    currencies?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
