import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_accessesInput } from '../admin-role-accesses/admin-role-accesses-unchecked-create-nested-many-without-admin-accesses.input';

@InputType()
export class AdminAccessesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:false})
    access_name!: string;

    @Field(() => AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_accessesInput, {nullable:true})
    role_accesses?: AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_accessesInput;
}
