import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutPlayer_walletsInput } from '../players/players-create-nested-one-without-player-wallets.input';

@InputType()
export class player_walletsCreateInput {

    @Field(() => String, {nullable:true})
    player_wallet_id?: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    frozen_amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => playersCreateNestedOneWithoutPlayer_walletsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutPlayer_walletsInput;
}
