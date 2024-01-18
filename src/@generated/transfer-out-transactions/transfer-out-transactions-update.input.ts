import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { playersUpdateOneRequiredWithoutTransfer_out_transactionsNestedInput } from '../players/players-update-one-required-without-transfer-out-transactions-nested.input';

@InputType()
export class transfer_out_transactionsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    transfer_out_transaction_id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    request_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    process_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    processed_by?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    transaction_date?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTransactionTypeFieldUpdateOperationsInput, {nullable:true})
    status?: EnumTransactionTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    counterpart_platform?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    counterpart_username?: StringFieldUpdateOperationsInput;

    @Field(() => playersUpdateOneRequiredWithoutTransfer_out_transactionsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutTransfer_out_transactionsNestedInput;
}
