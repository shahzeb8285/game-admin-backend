import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput } from '../admin-login-logs/admin-login-logs-unchecked-update-many-without-admins-nested.input';
import { manual_adjustmentsUncheckedUpdateManyWithoutAdminsNestedInput } from '../manual-adjustments/manual-adjustments-unchecked-update-many-without-admins-nested.input';
import { transfer_out_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput } from '../transfer-out-transactions/transfer-out-transactions-unchecked-update-many-without-processed-by-admin-nested.input';
import { transfer_in_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-update-many-without-processed-by-admin-nested.input';
import { deposit_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput } from '../deposit-transactions/deposit-transactions-unchecked-update-many-without-processed-by-admin-nested.input';

@InputType()
export class adminsUncheckedUpdateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:true})
    admin_name?: string;

    @Field(() => String, {nullable:true})
    admin_password?: string;

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput;

    @Field(() => manual_adjustmentsUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedUpdateManyWithoutAdminsNestedInput;

    @Field(() => transfer_out_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput;

    @Field(() => transfer_in_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput;

    @Field(() => deposit_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedUpdateManyWithoutProcessed_by_adminNestedInput;
}
