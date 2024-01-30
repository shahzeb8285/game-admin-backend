import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesWhereUniqueInput } from '../exchange-rates/exchange-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueexchangeRatesArgs {

    @Field(() => exchange_ratesWhereUniqueInput, {nullable:false})
    @Type(() => exchange_ratesWhereUniqueInput)
    where!: exchange_ratesWhereUniqueInput;
}
