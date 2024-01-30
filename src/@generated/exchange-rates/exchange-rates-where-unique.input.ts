import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { exchange_ratesWhereInput } from './exchange-rates-where.input';
import { Enumreal_currencyFilter } from '../prisma/enumreal-currency-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class exchange_ratesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    exchange_rate_id?: string;

    @Field(() => [exchange_ratesWhereInput], {nullable:true})
    AND?: Array<exchange_ratesWhereInput>;

    @Field(() => [exchange_ratesWhereInput], {nullable:true})
    OR?: Array<exchange_ratesWhereInput>;

    @Field(() => [exchange_ratesWhereInput], {nullable:true})
    NOT?: Array<exchange_ratesWhereInput>;

    @Field(() => Enumreal_currencyFilter, {nullable:true})
    real_currency?: Enumreal_currencyFilter;

    @Field(() => Enumgame_currencyFilter, {nullable:true})
    game_currency?: Enumgame_currencyFilter;

    @Field(() => FloatFilter, {nullable:true})
    game_per_real?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
