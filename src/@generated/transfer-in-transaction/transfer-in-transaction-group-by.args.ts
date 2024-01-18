import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionWhereInput } from './transfer-in-transaction-where.input';
import { Type } from 'class-transformer';
import { TransferInTransactionOrderByWithAggregationInput } from './transfer-in-transaction-order-by-with-aggregation.input';
import { TransferInTransactionScalarFieldEnum } from './transfer-in-transaction-scalar-field.enum';
import { TransferInTransactionScalarWhereWithAggregatesInput } from './transfer-in-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TransferInTransactionCountAggregateInput } from './transfer-in-transaction-count-aggregate.input';
import { TransferInTransactionAvgAggregateInput } from './transfer-in-transaction-avg-aggregate.input';
import { TransferInTransactionSumAggregateInput } from './transfer-in-transaction-sum-aggregate.input';
import { TransferInTransactionMinAggregateInput } from './transfer-in-transaction-min-aggregate.input';
import { TransferInTransactionMaxAggregateInput } from './transfer-in-transaction-max-aggregate.input';

@ArgsType()
export class TransferInTransactionGroupByArgs {

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    @Type(() => TransferInTransactionWhereInput)
    where?: TransferInTransactionWhereInput;

    @Field(() => [TransferInTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TransferInTransactionOrderByWithAggregationInput>;

    @Field(() => [TransferInTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TransferInTransactionScalarFieldEnum>;

    @Field(() => TransferInTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: TransferInTransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TransferInTransactionCountAggregateInput, {nullable:true})
    _count?: TransferInTransactionCountAggregateInput;

    @Field(() => TransferInTransactionAvgAggregateInput, {nullable:true})
    _avg?: TransferInTransactionAvgAggregateInput;

    @Field(() => TransferInTransactionSumAggregateInput, {nullable:true})
    _sum?: TransferInTransactionSumAggregateInput;

    @Field(() => TransferInTransactionMinAggregateInput, {nullable:true})
    _min?: TransferInTransactionMinAggregateInput;

    @Field(() => TransferInTransactionMaxAggregateInput, {nullable:true})
    _max?: TransferInTransactionMaxAggregateInput;
}
