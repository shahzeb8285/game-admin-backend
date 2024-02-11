import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { Float } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutWalletInput } from '../players/players-create-nested-one-without-wallet.input';

@InputType()
export class player_walletsCreateInput {

    @Field(() => String, {nullable:true})
    player_wallet_id?: string;

    @Field(() => game_currency, {nullable:false})
    currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    frozen_amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => playersCreateNestedOneWithoutWalletInput, {nullable:false})
    player!: playersCreateNestedOneWithoutWalletInput;
}
