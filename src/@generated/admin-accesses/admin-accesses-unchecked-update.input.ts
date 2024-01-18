import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-accesses-nested.input';

@InputType()
export class admin_accessesUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_access_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    access_name?: StringFieldUpdateOperationsInput;

    @Field(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput, {nullable:true})
    role_accesses?: admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput;
}
