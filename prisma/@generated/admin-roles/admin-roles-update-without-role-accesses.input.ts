import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { AdminsUpdateManyWithoutAdmin_rolesNestedInput } from '../admins/admins-update-many-without-admin-roles-nested.input';

@InputType()
export class admin_rolesUpdateWithoutRole_accessesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_role_name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => AdminsUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admins?: AdminsUpdateManyWithoutAdmin_rolesNestedInput;
}
