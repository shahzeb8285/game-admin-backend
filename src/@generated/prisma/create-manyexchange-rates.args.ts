import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesCreateManyInput } from '../exchange-rates/exchange-rates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyexchangeRatesArgs {

    @Field(() => [exchange_ratesCreateManyInput], {nullable:false})
    @Type(() => exchange_ratesCreateManyInput)
    data!: Array<exchange_ratesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
