import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesUpdateManyMutationInput } from '../sg-merchants-currencies/sg-merchants-currencies-update-many-mutation.input';
import { Type } from 'class-transformer';
import { sg_merchants_currenciesWhereInput } from '../sg-merchants-currencies/sg-merchants-currencies-where.input';

@ArgsType()
export class UpdateManysgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesUpdateManyMutationInput, {nullable:false})
    @Type(() => sg_merchants_currenciesUpdateManyMutationInput)
    data!: sg_merchants_currenciesUpdateManyMutationInput;

    @Field(() => sg_merchants_currenciesWhereInput, {nullable:true})
    @Type(() => sg_merchants_currenciesWhereInput)
    where?: sg_merchants_currenciesWhereInput;
}
