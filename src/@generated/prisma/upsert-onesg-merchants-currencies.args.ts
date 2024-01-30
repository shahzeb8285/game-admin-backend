import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesWhereUniqueInput } from '../sg-merchants-currencies/sg-merchants-currencies-where-unique.input';
import { Type } from 'class-transformer';
import { sg_merchants_currenciesCreateInput } from '../sg-merchants-currencies/sg-merchants-currencies-create.input';
import { sg_merchants_currenciesUpdateInput } from '../sg-merchants-currencies/sg-merchants-currencies-update.input';

@ArgsType()
export class UpsertOnesgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchants_currenciesWhereUniqueInput)
    where!: sg_merchants_currenciesWhereUniqueInput;

    @Field(() => sg_merchants_currenciesCreateInput, {nullable:false})
    @Type(() => sg_merchants_currenciesCreateInput)
    create!: sg_merchants_currenciesCreateInput;

    @Field(() => sg_merchants_currenciesUpdateInput, {nullable:false})
    @Type(() => sg_merchants_currenciesUpdateInput)
    update!: sg_merchants_currenciesUpdateInput;
}
