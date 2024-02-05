import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Rebate_transactionsCountAggregate } from './rebate-transactions-count-aggregate.output';
import { Rebate_transactionsAvgAggregate } from './rebate-transactions-avg-aggregate.output';
import { Rebate_transactionsSumAggregate } from './rebate-transactions-sum-aggregate.output';
import { Rebate_transactionsMinAggregate } from './rebate-transactions-min-aggregate.output';
import { Rebate_transactionsMaxAggregate } from './rebate-transactions-max-aggregate.output';

@ObjectType()
export class Rebate_transactionsGroupBy {

    @Field(() => String, {nullable:false})
    rebate_transaction_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => String, {nullable:true})
    bonus_type?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Rebate_transactionsCountAggregate, {nullable:true})
    _count?: Rebate_transactionsCountAggregate;

    @Field(() => Rebate_transactionsAvgAggregate, {nullable:true})
    _avg?: Rebate_transactionsAvgAggregate;

    @Field(() => Rebate_transactionsSumAggregate, {nullable:true})
    _sum?: Rebate_transactionsSumAggregate;

    @Field(() => Rebate_transactionsMinAggregate, {nullable:true})
    _min?: Rebate_transactionsMinAggregate;

    @Field(() => Rebate_transactionsMaxAggregate, {nullable:true})
    _max?: Rebate_transactionsMaxAggregate;
}
