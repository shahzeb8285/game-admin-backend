import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletWhereInput } from './player-wallet-where.input';
import { Type } from 'class-transformer';
import { PlayerWalletOrderByWithRelationInput } from './player-wallet-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlayerWalletWhereUniqueInput } from './player-wallet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayerWalletCountAggregateInput } from './player-wallet-count-aggregate.input';
import { PlayerWalletAvgAggregateInput } from './player-wallet-avg-aggregate.input';
import { PlayerWalletSumAggregateInput } from './player-wallet-sum-aggregate.input';
import { PlayerWalletMinAggregateInput } from './player-wallet-min-aggregate.input';
import { PlayerWalletMaxAggregateInput } from './player-wallet-max-aggregate.input';

@ArgsType()
export class PlayerWalletAggregateArgs {

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    @Type(() => PlayerWalletWhereInput)
    where?: PlayerWalletWhereInput;

    @Field(() => [PlayerWalletOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlayerWalletOrderByWithRelationInput>;

    @Field(() => PlayerWalletWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlayerWalletWhereUniqueInput, 'player_wallet_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlayerWalletCountAggregateInput, {nullable:true})
    _count?: PlayerWalletCountAggregateInput;

    @Field(() => PlayerWalletAvgAggregateInput, {nullable:true})
    _avg?: PlayerWalletAvgAggregateInput;

    @Field(() => PlayerWalletSumAggregateInput, {nullable:true})
    _sum?: PlayerWalletSumAggregateInput;

    @Field(() => PlayerWalletMinAggregateInput, {nullable:true})
    _min?: PlayerWalletMinAggregateInput;

    @Field(() => PlayerWalletMaxAggregateInput, {nullable:true})
    _max?: PlayerWalletMaxAggregateInput;
}
