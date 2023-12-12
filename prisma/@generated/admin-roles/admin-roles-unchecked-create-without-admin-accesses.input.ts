import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput } from '../admins/admins-unchecked-create-nested-many-without-admin-roles.input';

@InputType()
export class admin_rolesUncheckedCreateWithoutAdmin_accessesInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput, {nullable:true})
    admins?: adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput;
}
