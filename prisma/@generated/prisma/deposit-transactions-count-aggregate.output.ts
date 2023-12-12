import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Deposit_transactionsCountAggregate {

    @Field(() => Int, {nullable:false})
    deposit_transaction_id!: number;

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    request_time!: number;

    @Field(() => Int, {nullable:false})
    process_time!: number;

    @Field(() => Int, {nullable:false})
    processed_by!: number;

    @Field(() => Int, {nullable:false})
    transaction_date!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    admin_bank_account_id_r!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
