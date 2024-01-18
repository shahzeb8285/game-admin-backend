import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateNestedManyWithoutAdmin_rolesInput } from '../admin/admin-create-nested-many-without-admin-roles.input';

@InputType()
export class AdminRoleCreateWithoutRole_accessesInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: AdminCreateNestedManyWithoutAdmin_rolesInput;
}
