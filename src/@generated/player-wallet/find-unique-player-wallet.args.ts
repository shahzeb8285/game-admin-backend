import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlayerWalletArgs {

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWalletWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>;
}
