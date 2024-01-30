import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateManyWithoutAdmin_rolesNestedInput } from '../admins/admins-update-many-without-admin-roles-nested.input';

@InputType()
export class admin_rolesUpdateWithoutAdmin_role_accessesInput {

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

    @Field(() => adminsUpdateManyWithoutAdmin_rolesNestedInput, {nullable:true})
    admins?: adminsUpdateManyWithoutAdmin_rolesNestedInput;
}
