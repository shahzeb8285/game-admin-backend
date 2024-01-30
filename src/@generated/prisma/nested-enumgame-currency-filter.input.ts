import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_currency } from './game-currency.enum';

@InputType()
export class NestedEnumgame_currencyFilter {

    @Field(() => game_currency, {nullable:true})
    equals?: keyof typeof game_currency;

    @Field(() => [game_currency], {nullable:true})
    in?: Array<keyof typeof game_currency>;

    @Field(() => [game_currency], {nullable:true})
    notIn?: Array<keyof typeof game_currency>;

    @Field(() => NestedEnumgame_currencyFilter, {nullable:true})
    not?: NestedEnumgame_currencyFilter;
}
