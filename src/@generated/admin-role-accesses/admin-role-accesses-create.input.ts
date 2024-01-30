import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateNestedOneWithoutAdmin_role_accessesInput } from '../admin-roles/admin-roles-create-nested-one-without-admin-role-accesses.input';
import { admin_accessesCreateNestedOneWithoutAdmin_role_accessesInput } from '../admin-accesses/admin-accesses-create-nested-one-without-admin-role-accesses.input';

@InputType()
export class admin_role_accessesCreateInput {

    @Field(() => String, {nullable:true})
    admin_role_access_id?: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_rolesCreateNestedOneWithoutAdmin_role_accessesInput, {nullable:false})
    admin_roles!: admin_rolesCreateNestedOneWithoutAdmin_role_accessesInput;

    @Field(() => admin_accessesCreateNestedOneWithoutAdmin_role_accessesInput, {nullable:false})
    admin_accesses!: admin_accessesCreateNestedOneWithoutAdmin_role_accessesInput;
}
