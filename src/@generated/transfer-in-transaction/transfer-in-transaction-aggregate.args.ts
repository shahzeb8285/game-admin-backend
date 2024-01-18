import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionWhereInput } from './transfer-in-transaction-where.input';
import { Type } from 'class-transformer';
import { TransferInTransactionOrderByWithRelationInput } from './transfer-in-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransferInTransactionCountAggregateInput } from './transfer-in-transaction-count-aggregate.input';
import { TransferInTransactionAvgAggregateInput } from './transfer-in-transaction-avg-aggregate.input';
import { TransferInTransactionSumAggregateInput } from './transfer-in-transaction-sum-aggregate.input';
import { TransferInTransactionMinAggregateInput } from './transfer-in-transaction-min-aggregate.input';
import { TransferInTransactionMaxAggregateInput } from './transfer-in-transaction-max-aggregate.input';

@ArgsType()
export class TransferInTransactionAggregateArgs {

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    @Type(() => TransferInTransactionWhereInput)
    where?: TransferInTransactionWhereInput;

    @Field(() => [TransferInTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransferInTransactionOrderByWithRelationInput>;

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TransferInTransactionWhereUniqueInput, 'transfer_in_Transaction_id'>;

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
