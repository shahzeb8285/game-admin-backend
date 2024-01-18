import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerWalletCreateInput } from './player-wallet-create.input';
import { PlayerWalletUpdateInput } from './player-wallet-update.input';

@ArgsType()
export class UpsertOnePlayerWalletArgs {

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>;

    @Field(() => PlayerWalletCreateInput, {nullable:false})
    @Type(() => PlayerWalletCreateInput)
    create!: PlayerWalletCreateInput;

    @Field(() => PlayerWalletUpdateInput, {nullable:false})
    @Type(() => PlayerWalletUpdateInput)
    update!: PlayerWalletUpdateInput;
}
