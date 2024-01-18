import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { admin_rolesUpdateOneRequiredWithoutAdminsNestedInput } from '../admin-roles/admin-roles-update-one-required-without-admins-nested.input';
import { admin_login_logsUpdateManyWithoutAdminsNestedInput } from '../admin-login-logs/admin-login-logs-update-many-without-admins-nested.input';

@InputType()
export class AdminsUpdateWithoutManual_adjustmentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    udate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => admin_rolesUpdateOneRequiredWithoutAdminsNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutAdminsNestedInput;

    @Field(() => admin_login_logsUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: admin_login_logsUpdateManyWithoutAdminsNestedInput;
}
