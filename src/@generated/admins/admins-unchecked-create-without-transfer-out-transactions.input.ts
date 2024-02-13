import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsUncheckedCreateNestedManyWithoutAdminsInput } from '../admin-login-logs/admin-login-logs-unchecked-create-nested-many-without-admins.input';
import { manual_adjustmentsUncheckedCreateNestedManyWithoutAdminsInput } from '../manual-adjustments/manual-adjustments-unchecked-create-nested-many-without-admins.input';
import { transfer_in_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput } from '../transfer-in-transactions/transfer-in-transactions-unchecked-create-nested-many-without-processed-by-admin.input';
import { deposit_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput } from '../deposit-transactions/deposit-transactions-unchecked-create-nested-many-without-processed-by-admin.input';
import { withdrawal_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput } from '../withdrawal-transactions/withdrawal-transactions-unchecked-create-nested-many-without-processed-by-admin.input';

@InputType()
export class adminsUncheckedCreateWithoutTransfer_out_transactionsInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    @Field(() => String, {nullable:false})
    admin_password!: string;

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_login_logsUncheckedCreateNestedManyWithoutAdminsInput, {nullable:true})
    admin_login_logs?: admin_login_logsUncheckedCreateNestedManyWithoutAdminsInput;

    @Field(() => manual_adjustmentsUncheckedCreateNestedManyWithoutAdminsInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedCreateNestedManyWithoutAdminsInput;

    @Field(() => transfer_in_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput;

    @Field(() => deposit_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput;

    @Field(() => withdrawal_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput;
}