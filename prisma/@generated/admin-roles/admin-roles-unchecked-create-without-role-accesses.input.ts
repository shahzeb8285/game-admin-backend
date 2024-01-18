import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admins/admins-unchecked-create-nested-many-without-admin-roles.input';

@InputType()
export class admin_rolesUncheckedCreateWithoutRole_accessesInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminsUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: AdminsUncheckedCreateNestedManyWithoutAdmin_rolesInput;
}
