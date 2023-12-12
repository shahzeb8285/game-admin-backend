import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { admin_role_accessesUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-update-many-without-admin-roles-nested.input';

@InputType()
export class admin_rolesUpdateWithoutAdminsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => admin_role_accessesUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admin_accesses?: admin_role_accessesUpdateManyWithoutAdmin_rolesNestedInput;
}
