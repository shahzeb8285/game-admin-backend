import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class player_walletsUncheckedUpdateWithoutPlayerInput {

    @Field(() => String, {nullable:true})
    player_wallet_id?: string;

    @Field(() => game_currency, {nullable:true})
    currency?: keyof typeof game_currency;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    frozen_amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;
}
