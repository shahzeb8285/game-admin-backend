import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesWhereUniqueInput } from '../sg-merchants-currencies/sg-merchants-currencies-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnesgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchants_currenciesWhereUniqueInput)
    where!: sg_merchants_currenciesWhereUniqueInput;
}
