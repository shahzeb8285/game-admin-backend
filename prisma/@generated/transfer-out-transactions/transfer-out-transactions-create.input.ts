import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { playersCreateNestedOneWithoutTransfer_out_transactionsInput } from '../players/players-create-nested-one-without-transfer-out-transactions.input';

@InputType()
export class transfer_out_transactionsCreateInput {

    @Field(() => String, {nullable:true})
    transfer_out_transaction_id?: string;

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

    @Field(() => TransactionType, {nullable:true})
    status?: keyof typeof TransactionType;

    @Field(() => String, {nullable:false})
    counterpart_platform!: string;

    @Field(() => String, {nullable:false})
    counterpart_username!: string;

    @Field(() => playersCreateNestedOneWithoutTransfer_out_transactionsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutTransfer_out_transactionsInput;
}
