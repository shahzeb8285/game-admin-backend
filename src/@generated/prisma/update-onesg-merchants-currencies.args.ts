import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesUpdateInput } from '../sg-merchants-currencies/sg-merchants-currencies-update.input';
import { Type } from 'class-transformer';
import { sg_merchants_currenciesWhereUniqueInput } from '../sg-merchants-currencies/sg-merchants-currencies-where-unique.input';

@ArgsType()
export class UpdateOnesgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesUpdateInput, {nullable:false})
    @Type(() => sg_merchants_currenciesUpdateInput)
    data!: sg_merchants_currenciesUpdateInput;

    @Field(() => sg_merchants_currenciesWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchants_currenciesWhereUniqueInput)
    where!: sg_merchants_currenciesWhereUniqueInput;
}
