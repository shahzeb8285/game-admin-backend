import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereInput } from './withdrawal-transaction-where.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionOrderByWithRelationInput } from './withdrawal-transaction-order-by-with-relation.input';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WithdrawalTransactionCountAggregateInput } from './withdrawal-transaction-count-aggregate.input';
import { WithdrawalTransactionAvgAggregateInput } from './withdrawal-transaction-avg-aggregate.input';
import { WithdrawalTransactionSumAggregateInput } from './withdrawal-transaction-sum-aggregate.input';
import { WithdrawalTransactionMinAggregateInput } from './withdrawal-transaction-min-aggregate.input';
import { WithdrawalTransactionMaxAggregateInput } from './withdrawal-transaction-max-aggregate.input';

@ArgsType()
export class WithdrawalTransactionAggregateArgs {

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    @Type(() => WithdrawalTransactionWhereInput)
    where?: WithdrawalTransactionWhereInput;

    @Field(() => [WithdrawalTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WithdrawalTransactionOrderByWithRelationInput>;

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:true})
    cursor?: WithdrawalTransactionWhereUniqueInput;

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
