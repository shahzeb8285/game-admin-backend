import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { NestedEnumreal_currencyFilter } from './nested-enumreal-currency-filter.input';

@InputType()
export class Enumreal_currencyFilter {

    @Field(() => real_currency, {nullable:true})
    equals?: keyof typeof real_currency;

    @Field(() => [real_currency], {nullable:true})
    in?: Array<keyof typeof real_currency>;

    @Field(() => [real_currency], {nullable:true})
    notIn?: Array<keyof typeof real_currency>;

    @Field(() => NestedEnumreal_currencyFilter, {nullable:true})
    not?: NestedEnumreal_currencyFilter;
}
