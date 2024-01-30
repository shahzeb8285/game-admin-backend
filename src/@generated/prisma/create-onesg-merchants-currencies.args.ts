import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesCreateInput } from '../sg-merchants-currencies/sg-merchants-currencies-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesCreateInput, {nullable:false})
    @Type(() => sg_merchants_currenciesCreateInput)
    data!: sg_merchants_currenciesCreateInput;
}
