import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletUpdateInput } from './player-wallet-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';

@ArgsType()
export class UpdateOnePlayerWalletArgs {

    @Field(() => PlayerWalletUpdateInput, {nullable:false})
    @Type(() => PlayerWalletUpdateInput)
    data!: PlayerWalletUpdateInput;

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>;
}
