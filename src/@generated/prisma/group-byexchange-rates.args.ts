import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesWhereInput } from '../exchange-rates/exchange-rates-where.input';
import { Type } from 'class-transformer';
import { exchange_ratesOrderByWithAggregationInput } from '../exchange-rates/exchange-rates-order-by-with-aggregation.input';
import { Exchange_ratesScalarFieldEnum } from './exchange-rates-scalar-field.enum';
import { exchange_ratesScalarWhereWithAggregatesInput } from '../exchange-rates/exchange-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByexchangeRatesArgs {

    @Field(() => exchange_ratesWhereInput, {nullable:true})
    @Type(() => exchange_ratesWhereInput)
    where?: exchange_ratesWhereInput;

    @Field(() => [exchange_ratesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<exchange_ratesOrderByWithAggregationInput>;

    @Field(() => [Exchange_ratesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Exchange_ratesScalarFieldEnum>;

    @Field(() => exchange_ratesScalarWhereWithAggregatesInput, {nullable:true})
    having?: exchange_ratesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
