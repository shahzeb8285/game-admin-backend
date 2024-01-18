import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { PlayerUpdateOneRequiredWithoutTransfer_in_transactionsNestedInput } from '../player/player-update-one-required-without-transfer-in-transactions-nested.input';

@InputType()
export class TransferInTransactionUpdateInput {

    @Field(() => String, {nullable:true})
    transfer_in_Transaction_id?: string;

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
    counterpart_platform?: string;

    @Field(() => String, {nullable:true})
    counterpart_username?: string;

    @Field(() => PlayerUpdateOneRequiredWithoutTransfer_in_transactionsNestedInput, {nullable:true})
    players?: PlayerUpdateOneRequiredWithoutTransfer_in_transactionsNestedInput;
}
