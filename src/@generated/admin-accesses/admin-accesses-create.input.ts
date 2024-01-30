import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateNestedManyWithoutAdmin_accessesInput } from '../admin-role-accesses/admin-role-accesses-create-nested-many-without-admin-accesses.input';

@InputType()
export class admin_accessesCreateInput {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:false})
    access_name!: string;

    @Field(() => admin_role_accessesCreateNestedManyWithoutAdmin_accessesInput, {nullable:true})
    admin_role_accesses?: admin_role_accessesCreateNestedManyWithoutAdmin_accessesInput;
}
