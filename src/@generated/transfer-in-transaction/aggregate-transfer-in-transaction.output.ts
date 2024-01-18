import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransferInTransactionCountAggregate } from './transfer-in-transaction-count-aggregate.output';
import { TransferInTransactionAvgAggregate } from './transfer-in-transaction-avg-aggregate.output';
import { TransferInTransactionSumAggregate } from './transfer-in-transaction-sum-aggregate.output';
import { TransferInTransactionMinAggregate } from './transfer-in-transaction-min-aggregate.output';
import { TransferInTransactionMaxAggregate } from './transfer-in-transaction-max-aggregate.output';

@ObjectType()
export class AggregateTransferInTransaction {

    @Field(() => TransferInTransactionCountAggregate, {nullable:true})
    _count?: TransferInTransactionCountAggregate;

    @Field(() => TransferInTransactionAvgAggregate, {nullable:true})
    _avg?: TransferInTransactionAvgAggregate;

    @Field(() => TransferInTransactionSumAggregate, {nullable:true})
    _sum?: TransferInTransactionSumAggregate;

    @Field(() => TransferInTransactionMinAggregate, {nullable:true})
    _min?: TransferInTransactionMinAggregate;

    @Field(() => TransferInTransactionMaxAggregate, {nullable:true})
    _max?: TransferInTransactionMaxAggregate;
}
