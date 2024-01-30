import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesCreateInput } from '../exchange-rates/exchange-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneexchangeRatesArgs {

    @Field(() => exchange_ratesCreateInput, {nullable:false})
    @Type(() => exchange_ratesCreateInput)
    data!: exchange_ratesCreateInput;
}
