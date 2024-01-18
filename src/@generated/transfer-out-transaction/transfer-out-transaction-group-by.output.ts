import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransferOutTransactionCountAggregate } from './transfer-out-transaction-count-aggregate.output';
import { TransferOutTransactionAvgAggregate } from './transfer-out-transaction-avg-aggregate.output';
import { TransferOutTransactionSumAggregate } from './transfer-out-transaction-sum-aggregate.output';
import { TransferOutTransactionMinAggregate } from './transfer-out-transaction-min-aggregate.output';
import { TransferOutTransactionMaxAggregate } from './transfer-out-transaction-max-aggregate.output';

@ObjectType()
export class TransferOutTransactionGroupBy {

    @Field(() => String, {nullable:false})
    transfer_out_transaction_id!: string;

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
