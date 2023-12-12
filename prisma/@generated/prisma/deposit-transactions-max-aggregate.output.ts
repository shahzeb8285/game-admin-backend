import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';

@ObjectType()
export class Deposit_transactionsMaxAggregate {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Date, {nullable:true})
    request_time?: Date | string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => String, {nullable:true})
    processed_by?: string;

    @Field(() => String, {nullable:true})
    transaction_date?: string;

    @Field(() => TransactionType, {nullable:true})
    status?: keyof typeof TransactionType;

    @Field(() => String, {nullable:true})
    admin_bank_account_id_r?: string;
}
