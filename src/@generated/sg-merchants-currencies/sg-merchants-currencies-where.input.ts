import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class sg_merchants_currenciesWhereInput {

    @Field(() => [sg_merchants_currenciesWhereInput], {nullable:true})
    AND?: Array<sg_merchants_currenciesWhereInput>;

    @Field(() => [sg_merchants_currenciesWhereInput], {nullable:true})
    OR?: Array<sg_merchants_currenciesWhereInput>;

    @Field(() => [sg_merchants_currenciesWhereInput], {nullable:true})
    NOT?: Array<sg_merchants_currenciesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    sg_merchants_currency_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    merchants_currency_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    merchant_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    currencies?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
