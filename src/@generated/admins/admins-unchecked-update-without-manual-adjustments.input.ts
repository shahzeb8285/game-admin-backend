import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput } from '../admin-login-logs/admin-login-logs-unchecked-update-many-without-admins-nested.input';

@InputType()
export class adminsUncheckedUpdateWithoutManual_adjustmentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    udate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    admin_login_logs?: admin_login_logsUncheckedUpdateManyWithoutAdminsNestedInput;
}
