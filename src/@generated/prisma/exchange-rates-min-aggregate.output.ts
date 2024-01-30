import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { real_currency } from './real-currency.enum';
import { game_currency } from './game-currency.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Exchange_ratesMinAggregate {

    @Field(() => String, {nullable:true})
    exchange_rate_id?: string;

    @Field(() => real_currency, {nullable:true})
    real_currency?: keyof typeof real_currency;

    @Field(() => game_currency, {nullable:true})
    game_currency?: keyof typeof game_currency;

    @Field(() => Float, {nullable:true})
    game_per_real?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
