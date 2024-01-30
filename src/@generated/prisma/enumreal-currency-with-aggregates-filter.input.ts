import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { NestedEnumreal_currencyWithAggregatesFilter } from './nested-enumreal-currency-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumreal_currencyFilter } from './nested-enumreal-currency-filter.input';

@InputType()
export class Enumreal_currencyWithAggregatesFilter {

    @Field(() => real_currency, {nullable:true})
    equals?: keyof typeof real_currency;

    @Field(() => [real_currency], {nullable:true})
    in?: Array<keyof typeof real_currency>;

    @Field(() => [real_currency], {nullable:true})
    notIn?: Array<keyof typeof real_currency>;

    @Field(() => NestedEnumreal_currencyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumreal_currencyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumreal_currencyFilter, {nullable:true})
    _min?: NestedEnumreal_currencyFilter;

    @Field(() => NestedEnumreal_currencyFilter, {nullable:true})
    _max?: NestedEnumreal_currencyFilter;
}
