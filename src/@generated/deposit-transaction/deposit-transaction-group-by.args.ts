import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';
import { Type } from 'class-transformer';
import { DepositTransactionOrderByWithAggregationInput } from './deposit-transaction-order-by-with-aggregation.input';
import { DepositTransactionScalarFieldEnum } from './deposit-transaction-scalar-field.enum';
import { DepositTransactionScalarWhereWithAggregatesInput } from './deposit-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DepositTransactionCountAggregateInput } from './deposit-transaction-count-aggregate.input';
import { DepositTransactionAvgAggregateInput } from './deposit-transaction-avg-aggregate.input';
import { DepositTransactionSumAggregateInput } from './deposit-transaction-sum-aggregate.input';
import { DepositTransactionMinAggregateInput } from './deposit-transaction-min-aggregate.input';
import { DepositTransactionMaxAggregateInput } from './deposit-transaction-max-aggregate.input';

@ArgsType()
export class DepositTransactionGroupByArgs {

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    @Type(() => DepositTransactionWhereInput)
    where?: DepositTransactionWhereInput;

    @Field(() => [DepositTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DepositTransactionOrderByWithAggregationInput>;

    @Field(() => [DepositTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DepositTransactionScalarFieldEnum>;

    @Field(() => DepositTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: DepositTransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DepositTransactionCountAggregateInput, {nullable:true})
    _count?: DepositTransactionCountAggregateInput;

    @Field(() => DepositTransactionAvgAggregateInput, {nullable:true})
    _avg?: DepositTransactionAvgAggregateInput;

    @Field(() => DepositTransactionSumAggregateInput, {nullable:true})
    _sum?: DepositTransactionSumAggregateInput;

    @Field(() => DepositTransactionMinAggregateInput, {nullable:true})
    _min?: DepositTransactionMinAggregateInput;

    @Field(() => DepositTransactionMaxAggregateInput, {nullable:true})
    _max?: DepositTransactionMaxAggregateInput;
}
