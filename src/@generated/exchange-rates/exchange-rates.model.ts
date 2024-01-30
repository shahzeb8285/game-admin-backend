import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { game_currency } from '../prisma/game-currency.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class exchange_rates {

    @Field(() => ID, {nullable:false})
    exchange_rate_id!: string;

    @Field(() => real_currency, {nullable:false})
    real_currency!: keyof typeof real_currency;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_per_real!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;
}
