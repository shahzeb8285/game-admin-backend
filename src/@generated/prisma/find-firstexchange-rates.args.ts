import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesWhereInput } from '../exchange-rates/exchange-rates-where.input';
import { Type } from 'class-transformer';
import { exchange_ratesOrderByWithRelationInput } from '../exchange-rates/exchange-rates-order-by-with-relation.input';
import { exchange_ratesWhereUniqueInput } from '../exchange-rates/exchange-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Exchange_ratesScalarFieldEnum } from './exchange-rates-scalar-field.enum';

@ArgsType()
export class FindFirstexchangeRatesArgs {

    @Field(() => exchange_ratesWhereInput, {nullable:true})
    @Type(() => exchange_ratesWhereInput)
    where?: exchange_ratesWhereInput;

    @Field(() => [exchange_ratesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<exchange_ratesOrderByWithRelationInput>;

    @Field(() => exchange_ratesWhereUniqueInput, {nullable:true})
    cursor?: exchange_ratesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Exchange_ratesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Exchange_ratesScalarFieldEnum>;
}
