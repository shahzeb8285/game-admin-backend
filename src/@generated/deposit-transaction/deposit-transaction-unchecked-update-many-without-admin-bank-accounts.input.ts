import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';

@InputType()
export class DepositTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsInput {

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
}
