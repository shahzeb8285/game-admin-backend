import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesWhereInput } from '../exchange-rates/exchange-rates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyexchangeRatesArgs {

    @Field(() => exchange_ratesWhereInput, {nullable:true})
    @Type(() => exchange_ratesWhereInput)
    where?: exchange_ratesWhereInput;
}
