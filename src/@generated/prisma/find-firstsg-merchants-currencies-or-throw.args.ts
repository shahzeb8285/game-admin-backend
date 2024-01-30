import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesWhereInput } from '../sg-merchants-currencies/sg-merchants-currencies-where.input';
import { Type } from 'class-transformer';
import { sg_merchants_currenciesOrderByWithRelationInput } from '../sg-merchants-currencies/sg-merchants-currencies-order-by-with-relation.input';
import { sg_merchants_currenciesWhereUniqueInput } from '../sg-merchants-currencies/sg-merchants-currencies-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Sg_merchants_currenciesScalarFieldEnum } from './sg-merchants-currencies-scalar-field.enum';

@ArgsType()
export class FindFirstsgMerchantsCurrenciesOrThrowArgs {

    @Field(() => sg_merchants_currenciesWhereInput, {nullable:true})
    @Type(() => sg_merchants_currenciesWhereInput)
    where?: sg_merchants_currenciesWhereInput;

    @Field(() => [sg_merchants_currenciesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sg_merchants_currenciesOrderByWithRelationInput>;

    @Field(() => sg_merchants_currenciesWhereUniqueInput, {nullable:true})
    cursor?: sg_merchants_currenciesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Sg_merchants_currenciesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Sg_merchants_currenciesScalarFieldEnum>;
}
