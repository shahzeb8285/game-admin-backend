import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { game_currency } from '../prisma/game-currency.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class exchange_ratesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    exchange_rate_id?: string;

    @Field(() => real_currency, {nullable:false})
    real_currency!: keyof typeof real_currency;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_per_real!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
