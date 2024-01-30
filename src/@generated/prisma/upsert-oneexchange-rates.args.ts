import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesWhereUniqueInput } from '../exchange-rates/exchange-rates-where-unique.input';
import { Type } from 'class-transformer';
import { exchange_ratesCreateInput } from '../exchange-rates/exchange-rates-create.input';
import { exchange_ratesUpdateInput } from '../exchange-rates/exchange-rates-update.input';

@ArgsType()
export class UpsertOneexchangeRatesArgs {

    @Field(() => exchange_ratesWhereUniqueInput, {nullable:false})
    @Type(() => exchange_ratesWhereUniqueInput)
    where!: exchange_ratesWhereUniqueInput;

    @Field(() => exchange_ratesCreateInput, {nullable:false})
    @Type(() => exchange_ratesCreateInput)
    create!: exchange_ratesCreateInput;

    @Field(() => exchange_ratesUpdateInput, {nullable:false})
    @Type(() => exchange_ratesUpdateInput)
    update!: exchange_ratesUpdateInput;
}
