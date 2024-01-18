import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransferOutTransactionCountAggregate } from './transfer-out-transaction-count-aggregate.output';
import { TransferOutTransactionAvgAggregate } from './transfer-out-transaction-avg-aggregate.output';
import { TransferOutTransactionSumAggregate } from './transfer-out-transaction-sum-aggregate.output';
import { TransferOutTransactionMinAggregate } from './transfer-out-transaction-min-aggregate.output';
import { TransferOutTransactionMaxAggregate } from './transfer-out-transaction-max-aggregate.output';

@ObjectType()
export class AggregateTransferOutTransaction {

    @Field(() => TransferOutTransactionCountAggregate, {nullable:true})
    _count?: TransferOutTransactionCountAggregate;

    @Field(() => TransferOutTransactionAvgAggregate, {nullable:true})
    _avg?: TransferOutTransactionAvgAggregate;

    @Field(() => TransferOutTransactionSumAggregate, {nullable:true})
    _sum?: TransferOutTransactionSumAggregate;

    @Field(() => TransferOutTransactionMinAggregate, {nullable:true})
    _min?: TransferOutTransactionMinAggregate;

    @Field(() => TransferOutTransactionMaxAggregate, {nullable:true})
    _max?: TransferOutTransactionMaxAggregate;
}
