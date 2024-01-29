import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { WithdrawalTransactionCountAggregate } from './withdrawal-transaction-count-aggregate.output';
import { WithdrawalTransactionAvgAggregate } from './withdrawal-transaction-avg-aggregate.output';
import { WithdrawalTransactionSumAggregate } from './withdrawal-transaction-sum-aggregate.output';
import { WithdrawalTransactionMinAggregate } from './withdrawal-transaction-min-aggregate.output';
import { WithdrawalTransactionMaxAggregate } from './withdrawal-transaction-max-aggregate.output';

@ObjectType()
export class WithdrawalTransactionGroupBy {

    @Field(() => String, {nullable:false})
    withdrawal_transaction_id!: string;

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
    admin_bank_account_id!: string;

    @Field(() => WithdrawalTransactionCountAggregate, {nullable:true})
    _count?: WithdrawalTransactionCountAggregate;

    @Field(() => WithdrawalTransactionAvgAggregate, {nullable:true})
    _avg?: WithdrawalTransactionAvgAggregate;

    @Field(() => WithdrawalTransactionSumAggregate, {nullable:true})
    _sum?: WithdrawalTransactionSumAggregate;

    @Field(() => WithdrawalTransactionMinAggregate, {nullable:true})
    _min?: WithdrawalTransactionMinAggregate;

    @Field(() => WithdrawalTransactionMaxAggregate, {nullable:true})
    _max?: WithdrawalTransactionMaxAggregate;
}
