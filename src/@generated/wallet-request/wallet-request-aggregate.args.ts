import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestWhereInput } from './wallet-request-where.input';
import { Type } from 'class-transformer';
import { WalletRequestOrderByWithRelationInput } from './wallet-request-order-by-with-relation.input';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WalletRequestCountAggregateInput } from './wallet-request-count-aggregate.input';
import { WalletRequestAvgAggregateInput } from './wallet-request-avg-aggregate.input';
import { WalletRequestSumAggregateInput } from './wallet-request-sum-aggregate.input';
import { WalletRequestMinAggregateInput } from './wallet-request-min-aggregate.input';
import { WalletRequestMaxAggregateInput } from './wallet-request-max-aggregate.input';

@ArgsType()
export class WalletRequestAggregateArgs {

    @Field(() => WalletRequestWhereInput, {nullable:true})
    @Type(() => WalletRequestWhereInput)
    where?: WalletRequestWhereInput;

    @Field(() => [WalletRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WalletRequestOrderByWithRelationInput>;

    @Field(() => WalletRequestWhereUniqueInput, {nullable:true})
    cursor?: WalletRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WalletRequestCountAggregateInput, {nullable:true})
    _count?: WalletRequestCountAggregateInput;

    @Field(() => WalletRequestAvgAggregateInput, {nullable:true})
    _avg?: WalletRequestAvgAggregateInput;

    @Field(() => WalletRequestSumAggregateInput, {nullable:true})
    _sum?: WalletRequestSumAggregateInput;

    @Field(() => WalletRequestMinAggregateInput, {nullable:true})
    _min?: WalletRequestMinAggregateInput;

    @Field(() => WalletRequestMaxAggregateInput, {nullable:true})
    _max?: WalletRequestMaxAggregateInput;
}
