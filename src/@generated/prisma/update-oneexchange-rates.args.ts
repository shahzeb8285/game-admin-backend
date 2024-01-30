import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesUpdateInput } from '../exchange-rates/exchange-rates-update.input';
import { Type } from 'class-transformer';
import { exchange_ratesWhereUniqueInput } from '../exchange-rates/exchange-rates-where-unique.input';

@ArgsType()
export class UpdateOneexchangeRatesArgs {

    @Field(() => exchange_ratesUpdateInput, {nullable:false})
    @Type(() => exchange_ratesUpdateInput)
    data!: exchange_ratesUpdateInput;

    @Field(() => exchange_ratesWhereUniqueInput, {nullable:false})
    @Type(() => exchange_ratesWhereUniqueInput)
    where!: exchange_ratesWhereUniqueInput;
}
