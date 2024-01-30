import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesWhereInput } from '../sg-merchants-currencies/sg-merchants-currencies-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysgMerchantsCurrenciesArgs {

    @Field(() => sg_merchants_currenciesWhereInput, {nullable:true})
    @Type(() => sg_merchants_currenciesWhereInput)
    where?: sg_merchants_currenciesWhereInput;
}
