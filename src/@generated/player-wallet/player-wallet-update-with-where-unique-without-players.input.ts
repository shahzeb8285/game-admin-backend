import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerWalletUpdateWithoutPlayersInput } from './player-wallet-update-without-players.input';

@InputType()
export class PlayerWalletUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: PlayerWalletWhereUniqueInput;

    @Field(() => PlayerWalletUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerWalletUpdateWithoutPlayersInput)
    data!: PlayerWalletUpdateWithoutPlayersInput;
}
