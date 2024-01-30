import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUncheckedUpdateManyWithoutAdmin_rolesNestedInput } from '../admins/admins-unchecked-update-many-without-admin-roles-nested.input';
import { admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many-without-admin-roles-nested.input';

@InputType()
export class admin_rolesUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => adminsUncheckedUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admins?: adminsUncheckedUpdateManyWithoutAdmin_rolesNestedInput;

    @Field(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admin_role_accesses?: admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput;
}
