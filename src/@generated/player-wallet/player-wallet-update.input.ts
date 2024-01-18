import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlayerUpdateOneRequiredWithoutPlayer_walletsNestedInput } from '../player/player-update-one-required-without-player-wallets-nested.input';

@InputType()
export class PlayerWalletUpdateInput {

    @Field(() => String, {nullable:true})
    player_wallet_id?: string;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    frozen_amount?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => PlayerUpdateOneRequiredWithoutPlayer_walletsNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutPlayer_walletsNestedInput;
}
