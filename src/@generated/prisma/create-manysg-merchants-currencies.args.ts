import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchants_currenciesCreateManyInput } from '../sg-merchants-currencies/sg-merchants-currencies-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManysgMerchantsCurrenciesArgs {

    @Field(() => [sg_merchants_currenciesCreateManyInput], {nullable:false})
    @Type(() => sg_merchants_currenciesCreateManyInput)
    data!: Array<sg_merchants_currenciesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
