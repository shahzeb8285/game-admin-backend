import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_accessesInput } from '../admin-role-accesses/admin-role-accesses-unchecked-create-nested-many-without-admin-accesses.input';

@InputType()
export class admin_accessesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:false})
    access_name!: string;

    @Field(() => admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_accessesInput, {nullable:true})
    admin_role_accesses?: admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_accessesInput;
}
