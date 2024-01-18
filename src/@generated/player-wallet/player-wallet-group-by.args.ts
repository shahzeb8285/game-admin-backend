import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletWhereInput } from './player-wallet-where.input';
import { Type } from 'class-transformer';
import { PlayerWalletOrderByWithAggregationInput } from './player-wallet-order-by-with-aggregation.input';
import { PlayerWalletScalarFieldEnum } from './player-wallet-scalar-field.enum';
import { PlayerWalletScalarWhereWithAggregatesInput } from './player-wallet-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlayerWalletCountAggregateInput } from './player-wallet-count-aggregate.input';
import { PlayerWalletAvgAggregateInput } from './player-wallet-avg-aggregate.input';
import { PlayerWalletSumAggregateInput } from './player-wallet-sum-aggregate.input';
import { PlayerWalletMinAggregateInput } from './player-wallet-min-aggregate.input';
import { PlayerWalletMaxAggregateInput } from './player-wallet-max-aggregate.input';

@ArgsType()
export class PlayerWalletGroupByArgs {

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    @Type(() => PlayerWalletWhereInput)
    where?: PlayerWalletWhereInput;

    @Field(() => [PlayerWalletOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlayerWalletOrderByWithAggregationInput>;

    @Field(() => [PlayerWalletScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PlayerWalletScalarFieldEnum>;

    @Field(() => PlayerWalletScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlayerWalletScalarWhereWithAggregatesInput;

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
