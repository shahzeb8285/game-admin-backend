import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AdminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput } from '../admins/admins-update-one-required-without-admin-login-logs-nested.input';

@InputType()
export class admin_login_logsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    login_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ip?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    login_time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AdminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput, {nullable:true})
    admins?: AdminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput;
}
