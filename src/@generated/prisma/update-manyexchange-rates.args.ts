import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { exchange_ratesUpdateManyMutationInput } from '../exchange-rates/exchange-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { exchange_ratesWhereInput } from '../exchange-rates/exchange-rates-where.input';

@ArgsType()
export class UpdateManyexchangeRatesArgs {

    @Field(() => exchange_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => exchange_ratesUpdateManyMutationInput)
    data!: exchange_ratesUpdateManyMutationInput;

    @Field(() => exchange_ratesWhereInput, {nullable:true})
    @Type(() => exchange_ratesWhereInput)
    where?: exchange_ratesWhereInput;
}
