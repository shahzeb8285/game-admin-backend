import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { admin_role_accessesUpdateManyWithoutAdmin_accessesNestedInput } from '../admin-role-accesses/admin-role-accesses-update-many-without-admin-accesses-nested.input';

@InputType()
export class admin_accessesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    admin_access_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    access_name?: StringFieldUpdateOperationsInput;

    @Field(() => admin_role_accessesUpdateManyWithoutAdmin_accessesNestedInput, {nullable:true})
    role_accesses?: admin_role_accessesUpdateManyWithoutAdmin_accessesNestedInput;
}
