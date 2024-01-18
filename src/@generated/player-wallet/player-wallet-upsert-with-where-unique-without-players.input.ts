import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerWalletUpdateWithoutPlayersInput } from './player-wallet-update-without-players.input';
import { PlayerWalletCreateWithoutPlayersInput } from './player-wallet-create-without-players.input';

@InputType()
export class PlayerWalletUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: PlayerWalletWhereUniqueInput;

    @Field(() => PlayerWalletUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerWalletUpdateWithoutPlayersInput)
    update!: PlayerWalletUpdateWithoutPlayersInput;

    @Field(() => PlayerWalletCreateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerWalletCreateWithoutPlayersInput)
    create!: PlayerWalletCreateWithoutPlayersInput;
}
