import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutAdminsNestedInput } from '../admin-roles/admin-roles-update-one-required-without-admins-nested.input';
import { admin_login_logsUpdateManyWithoutAdminsNestedInput } from '../admin-login-logs/admin-login-logs-update-many-without-admins-nested.input';
import { manual_adjustmentsUpdateManyWithoutAdminsNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-admins-nested.input';
import { transfer_out_transactionsUpdateManyWithoutProcessed_by_adminNestedInput } from '../transfer-out-transactions/transfer-out-transactions-update-many-without-processed-by-admin-nested.input';
import { transfer_in_transactionsUpdateManyWithoutProcessed_by_adminNestedInput } from '../transfer-in-transactions/transfer-in-transactions-update-many-without-processed-by-admin-nested.input';
import { deposit_transactionsUpdateManyWithoutProcessed_by_adminNestedInput } from '../deposit-transactions/deposit-transactions-update-many-without-processed-by-admin-nested.input';
import { withdrawal_transactionsUpdateManyWithoutProcessed_by_adminNestedInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-without-processed-by-admin-nested.input';

@InputType()
export class adminsUpdateInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:true})
    admin_name?: string;

    @Field(() => String, {nullable:true})
    admin_password?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_rolesUpdateOneRequiredWithoutAdminsNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutAdminsNestedInput;

    @Field(() => admin_login_logsUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: admin_login_logsUpdateManyWithoutAdminsNestedInput;

    @Field(() => manual_adjustmentsUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutAdminsNestedInput;

    @Field(() => transfer_out_transactionsUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsUpdateManyWithoutProcessed_by_adminNestedInput;

    @Field(() => transfer_in_transactionsUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsUpdateManyWithoutProcessed_by_adminNestedInput;

    @Field(() => deposit_transactionsUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    deposit_transactions?: deposit_transactionsUpdateManyWithoutProcessed_by_adminNestedInput;

    @Field(() => withdrawal_transactionsUpdateManyWithoutProcessed_by_adminNestedInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsUpdateManyWithoutProcessed_by_adminNestedInput;
}
