import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-roles-nested.input';

@InputType()
export class admin_rolesUncheckedUpdateWithoutAdminsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    role_accesses?: admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput;
}
