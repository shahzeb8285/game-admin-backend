import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from './admin-roles-where.input';
import { Type } from 'class-transformer';
import { admin_rolesUpdateWithoutAdmin_role_accessesInput } from './admin-roles-update-without-admin-role-accesses.input';

@InputType()
export class admin_rolesUpdateToOneWithWhereWithoutAdmin_role_accessesInput {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;

    @Field(() => admin_rolesUpdateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutAdmin_role_accessesInput)
    data!: admin_rolesUpdateWithoutAdmin_role_accessesInput;
}
