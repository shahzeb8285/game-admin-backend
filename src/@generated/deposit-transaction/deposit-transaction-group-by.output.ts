import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { DepositTransactionCountAggregate } from './deposit-transaction-count-aggregate.output';
import { DepositTransactionAvgAggregate } from './deposit-transaction-avg-aggregate.output';
import { DepositTransactionSumAggregate } from './deposit-transaction-sum-aggregate.output';
import { DepositTransactionMinAggregate } from './deposit-transaction-min-aggregate.output';
import { DepositTransactionMaxAggregate } from './deposit-transaction-max-aggregate.output';

@ObjectType()
export class DepositTransactionGroupBy {

    @Field(() => String, {nullable:false})
    deposit_transaction_id!: string;

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

    @Field(() => DepositTransactionCountAggregate, {nullable:true})
    _count?: DepositTransactionCountAggregate;

    @Field(() => DepositTransactionAvgAggregate, {nullable:true})
    _avg?: DepositTransactionAvgAggregate;

    @Field(() => DepositTransactionSumAggregate, {nullable:true})
    _sum?: DepositTransactionSumAggregate;

    @Field(() => DepositTransactionMinAggregate, {nullable:true})
    _min?: DepositTransactionMinAggregate;

    @Field(() => DepositTransactionMaxAggregate, {nullable:true})
    _max?: DepositTransactionMaxAggregate;
}
