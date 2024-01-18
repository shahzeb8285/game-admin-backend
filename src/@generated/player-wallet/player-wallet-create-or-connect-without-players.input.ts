import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerWalletCreateWithoutPlayersInput } from './player-wallet-create-without-players.input';

@InputType()
export class PlayerWalletCreateOrConnectWithoutPlayersInput {

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: PlayerWalletWhereUniqueInput;

    @Field(() => PlayerWalletCreateWithoutPlayersInput, {nullable:false})
    @Type(() => PlayerWalletCreateWithoutPlayersInput)
    create!: PlayerWalletCreateWithoutPlayersInput;
}
