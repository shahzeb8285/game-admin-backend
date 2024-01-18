import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateNestedManyWithoutAdmin_rolesInput } from '../admins/admins-create-nested-many-without-admin-roles.input';

@InputType()
export class admin_rolesCreateWithoutRole_accessesInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminsCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: AdminsCreateNestedManyWithoutAdmin_rolesInput;
}
