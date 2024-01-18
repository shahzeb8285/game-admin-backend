import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestWhereInput } from './wallet-request-where.input';
import { Type } from 'class-transformer';
import { WalletRequestOrderByWithAggregationInput } from './wallet-request-order-by-with-aggregation.input';
import { WalletRequestScalarFieldEnum } from './wallet-request-scalar-field.enum';
import { WalletRequestScalarWhereWithAggregatesInput } from './wallet-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WalletRequestCountAggregateInput } from './wallet-request-count-aggregate.input';
import { WalletRequestAvgAggregateInput } from './wallet-request-avg-aggregate.input';
import { WalletRequestSumAggregateInput } from './wallet-request-sum-aggregate.input';
import { WalletRequestMinAggregateInput } from './wallet-request-min-aggregate.input';
import { WalletRequestMaxAggregateInput } from './wallet-request-max-aggregate.input';

@ArgsType()
export class WalletRequestGroupByArgs {

    @Field(() => WalletRequestWhereInput, {nullable:true})
    @Type(() => WalletRequestWhereInput)
    where?: WalletRequestWhereInput;

    @Field(() => [WalletRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WalletRequestOrderByWithAggregationInput>;

    @Field(() => [WalletRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WalletRequestScalarFieldEnum>;

    @Field(() => WalletRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: WalletRequestScalarWhereWithAggregatesInput;

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
