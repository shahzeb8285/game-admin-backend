import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchants_currenciesSumAggregate {

    @Field(() => Int, {nullable:true})
    merchants_currency_id?: number;

    @Field(() => Int, {nullable:true})
    merchant_id?: number;
}
