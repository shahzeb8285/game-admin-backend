import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';
import { Type } from 'class-transformer';
import { DepositTransactionOrderByWithRelationInput } from './deposit-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DepositTransactionCountAggregateInput } from './deposit-transaction-count-aggregate.input';
import { DepositTransactionAvgAggregateInput } from './deposit-transaction-avg-aggregate.input';
import { DepositTransactionSumAggregateInput } from './deposit-transaction-sum-aggregate.input';
import { DepositTransactionMinAggregateInput } from './deposit-transaction-min-aggregate.input';
import { DepositTransactionMaxAggregateInput } from './deposit-transaction-max-aggregate.input';

@ArgsType()
export class DepositTransactionAggregateArgs {

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    @Type(() => DepositTransactionWhereInput)
    where?: DepositTransactionWhereInput;

    @Field(() => [DepositTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepositTransactionOrderByWithRelationInput>;

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>;

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
