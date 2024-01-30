import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesWhereInput } from '../sg-merchants-currencies/sg-merchants-currencies-where.input';
import { Type } from 'class-transformer';
import { sg_merchants_currenciesOrderByWithAggregationInput } from '../sg-merchants-currencies/sg-merchants-currencies-order-by-with-aggregation.input';
import { Sg_merchants_currenciesScalarFieldEnum } from './sg-merchants-currencies-scalar-field.enum';
import { sg_merchants_currenciesScalarWhereWithAggregatesInput } from '../sg-merchants-currencies/sg-merchants-currencies-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesWhereInput, {nullable:true})
    @Type(() => sg_merchants_currenciesWhereInput)
    where?: sg_merchants_currenciesWhereInput;

    @Field(() => [sg_merchants_currenciesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sg_merchants_currenciesOrderByWithAggregationInput>;

    @Field(() => [Sg_merchants_currenciesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Sg_merchants_currenciesScalarFieldEnum>;

    @Field(() => sg_merchants_currenciesScalarWhereWithAggregatesInput, {nullable:true})
    having?: sg_merchants_currenciesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
