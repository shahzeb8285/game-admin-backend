import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';
import { NestedEnumgame_currencyWithAggregatesFilter } from './nested-enumgame-currency-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumgame_currencyFilter } from './nested-enumgame-currency-filter.input';

@InputType()
export class Enumgame_currencyWithAggregatesFilter {

    @Field(() => game_currency, {nullable:true})
    equals?: keyof typeof game_currency;

    @Field(() => [game_currency], {nullable:true})
    in?: Array<keyof typeof game_currency>;

    @Field(() => [game_currency], {nullable:true})
    notIn?: Array<keyof typeof game_currency>;

    @Field(() => NestedEnumgame_currencyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumgame_currencyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumgame_currencyFilter, {nullable:true})
    _min?: NestedEnumgame_currencyFilter;

    @Field(() => NestedEnumgame_currencyFilter, {nullable:true})
    _max?: NestedEnumgame_currencyFilter;
}
