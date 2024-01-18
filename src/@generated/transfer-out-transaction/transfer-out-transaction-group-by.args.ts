import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionWhereInput } from './transfer-out-transaction-where.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionOrderByWithAggregationInput } from './transfer-out-transaction-order-by-with-aggregation.input';
import { TransferOutTransactionScalarFieldEnum } from './transfer-out-transaction-scalar-field.enum';
import { TransferOutTransactionScalarWhereWithAggregatesInput } from './transfer-out-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TransferOutTransactionCountAggregateInput } from './transfer-out-transaction-count-aggregate.input';
import { TransferOutTransactionAvgAggregateInput } from './transfer-out-transaction-avg-aggregate.input';
import { TransferOutTransactionSumAggregateInput } from './transfer-out-transaction-sum-aggregate.input';
import { TransferOutTransactionMinAggregateInput } from './transfer-out-transaction-min-aggregate.input';
import { TransferOutTransactionMaxAggregateInput } from './transfer-out-transaction-max-aggregate.input';

@ArgsType()
export class TransferOutTransactionGroupByArgs {

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    @Type(() => TransferOutTransactionWhereInput)
    where?: TransferOutTransactionWhereInput;

    @Field(() => [TransferOutTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TransferOutTransactionOrderByWithAggregationInput>;

    @Field(() => [TransferOutTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TransferOutTransactionScalarFieldEnum>;

    @Field(() => TransferOutTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: TransferOutTransactionScalarWhereWithAggregatesInput;

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
