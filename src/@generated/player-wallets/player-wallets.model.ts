import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class player_wallets {

    @Field(() => ID, {nullable:false})
    player_wallet_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => game_currency, {nullable:false})
    currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    frozen_amount!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;
}
