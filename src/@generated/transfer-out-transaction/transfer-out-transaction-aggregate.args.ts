import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionWhereInput } from './transfer-out-transaction-where.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionOrderByWithRelationInput } from './transfer-out-transaction-order-by-with-relation.input';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransferOutTransactionCountAggregateInput } from './transfer-out-transaction-count-aggregate.input';
import { TransferOutTransactionAvgAggregateInput } from './transfer-out-transaction-avg-aggregate.input';
import { TransferOutTransactionSumAggregateInput } from './transfer-out-transaction-sum-aggregate.input';
import { TransferOutTransactionMinAggregateInput } from './transfer-out-transaction-min-aggregate.input';
import { TransferOutTransactionMaxAggregateInput } from './transfer-out-transaction-max-aggregate.input';

@ArgsType()
export class TransferOutTransactionAggregateArgs {

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    @Type(() => TransferOutTransactionWhereInput)
    where?: TransferOutTransactionWhereInput;

    @Field(() => [TransferOutTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransferOutTransactionOrderByWithRelationInput>;

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:true})
    cursor?: TransferOutTransactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TransferOutTransactionCountAggregateInput, {nullable:true})
    _count?: TransferOutTransactionCountAggregateInput;

    @Field(() => TransferOutTransactionAvgAggregateInput, {nullable:true})
    _avg?: TransferOutTransactionAvgAggregateInput;

    @Field(() => TransferOutTransactionSumAggregateInput, {nullable:true})
    _sum?: TransferOutTransactionSumAggregateInput;

    @Field(() => TransferOutTransactionMinAggregateInput, {nullable:true})
    _min?: TransferOutTransactionMinAggregateInput;

    @Field(() => TransferOutTransactionMaxAggregateInput, {nullable:true})
    _max?: TransferOutTransactionMaxAggregateInput;
}
