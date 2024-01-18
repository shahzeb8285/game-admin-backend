import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerWalletUpdateWithoutPlayersInput } from './player-wallet-update-without-players.input';

@InputType()
export class PlayerWalletUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>;

    @Field(() => PlayerWalletUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerWalletUpdateWithoutPlayersInput)
    data!: PlayerWalletUpdateWithoutPlayersInput;
}
