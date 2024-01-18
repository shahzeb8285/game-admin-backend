import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransferInTransactionCountAggregate } from './transfer-in-transaction-count-aggregate.output';
import { TransferInTransactionAvgAggregate } from './transfer-in-transaction-avg-aggregate.output';
import { TransferInTransactionSumAggregate } from './transfer-in-transaction-sum-aggregate.output';
import { TransferInTransactionMinAggregate } from './transfer-in-transaction-min-aggregate.output';
import { TransferInTransactionMaxAggregate } from './transfer-in-transaction-max-aggregate.output';

@ObjectType()
export class TransferInTransactionGroupBy {

    @Field(() => String, {nullable:false})
    transfer_in_Transaction_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    request_time!: Date | string;

    @Field(() => Date, {nullable:false})
    process_time!: Date | string;

    @Field(() => String, {nullable:false})
    processed_by!: string;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => TransactionType, {nullable:false})
    status!: keyof typeof TransactionType;

    @Field(() => String, {nullable:false})
    counterpart_platform!: string;

    @Field(() => String, {nullable:false})
    counterpart_username!: string;

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
