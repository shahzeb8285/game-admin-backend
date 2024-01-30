import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchants_currenciesAvgAggregate {

    @Field(() => Float, {nullable:true})
    merchants_currency_id?: number;

    @Field(() => Float, {nullable:true})
    merchant_id?: number;
}
