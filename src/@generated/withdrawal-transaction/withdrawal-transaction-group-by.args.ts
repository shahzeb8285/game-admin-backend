import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereInput } from './withdrawal-transaction-where.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionOrderByWithAggregationInput } from './withdrawal-transaction-order-by-with-aggregation.input';
import { WithdrawalTransactionScalarFieldEnum } from './withdrawal-transaction-scalar-field.enum';
import { WithdrawalTransactionScalarWhereWithAggregatesInput } from './withdrawal-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WithdrawalTransactionCountAggregateInput } from './withdrawal-transaction-count-aggregate.input';
import { WithdrawalTransactionAvgAggregateInput } from './withdrawal-transaction-avg-aggregate.input';
import { WithdrawalTransactionSumAggregateInput } from './withdrawal-transaction-sum-aggregate.input';
import { WithdrawalTransactionMinAggregateInput } from './withdrawal-transaction-min-aggregate.input';
import { WithdrawalTransactionMaxAggregateInput } from './withdrawal-transaction-max-aggregate.input';

@ArgsType()
export class WithdrawalTransactionGroupByArgs {

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    @Type(() => WithdrawalTransactionWhereInput)
    where?: WithdrawalTransactionWhereInput;

    @Field(() => [WithdrawalTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WithdrawalTransactionOrderByWithAggregationInput>;

    @Field(() => [WithdrawalTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WithdrawalTransactionScalarFieldEnum>;

    @Field(() => WithdrawalTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: WithdrawalTransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WithdrawalTransactionCountAggregateInput, {nullable:true})
    _count?: WithdrawalTransactionCountAggregateInput;

    @Field(() => WithdrawalTransactionAvgAggregateInput, {nullable:true})
    _avg?: WithdrawalTransactionAvgAggregateInput;

    @Field(() => WithdrawalTransactionSumAggregateInput, {nullable:true})
    _sum?: WithdrawalTransactionSumAggregateInput;

    @Field(() => WithdrawalTransactionMinAggregateInput, {nullable:true})
    _min?: WithdrawalTransactionMinAggregateInput;

    @Field(() => WithdrawalTransactionMaxAggregateInput, {nullable:true})
    _max?: WithdrawalTransactionMaxAggregateInput;
}
