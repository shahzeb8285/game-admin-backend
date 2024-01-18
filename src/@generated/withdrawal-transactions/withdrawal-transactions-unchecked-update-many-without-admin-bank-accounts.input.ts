import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';

@InputType()
export class withdrawal_transactionsUncheckedUpdateManyWithoutAdmin_bank_accountsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    withdrawal_transaction_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    player_id_r?: StringFieldUpdateOperationsInput;

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
}
