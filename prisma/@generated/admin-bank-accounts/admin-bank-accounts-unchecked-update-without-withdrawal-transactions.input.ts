import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { deposit_transactionsUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput } from '../deposit-transactions/deposit-transactions-unchecked-update-many-without-admin-bank-accounts-nested.input';

@InputType()
export class admin_bank_accountsUncheckedUpdateWithoutWithdrawal_transactionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_bank_account_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bank_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    account_number?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    holder_name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    method?: StringFieldUpdateOperationsInput;

    @Field(() => deposit_transactionsUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput;
}
