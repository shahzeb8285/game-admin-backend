import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput } from '../players/players-update-one-required-without-deposit-transactions-nested.input';
import { admin_bank_accountsUpdateOneRequiredWithoutDeposit_transactionsNestedInput } from '../admin-bank-accounts/admin-bank-accounts-update-one-required-without-deposit-transactions-nested.input';

@InputType()
export class deposit_transactionsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    deposit_transaction_id?: StringFieldUpdateOperationsInput;

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

    @Field(() => playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput;

    @Field(() => admin_bank_accountsUpdateOneRequiredWithoutDeposit_transactionsNestedInput, {nullable:true})
    admin_bank_accounts?: admin_bank_accountsUpdateOneRequiredWithoutDeposit_transactionsNestedInput;
}
