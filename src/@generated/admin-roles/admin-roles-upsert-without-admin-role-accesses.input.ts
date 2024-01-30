import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateWithoutAdmin_role_accessesInput } from './admin-roles-update-without-admin-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdmin_role_accessesInput } from './admin-roles-create-without-admin-role-accesses.input';
import { admin_rolesWhereInput } from './admin-roles-where.input';

@InputType()
export class admin_rolesUpsertWithoutAdmin_role_accessesInput {

    @Field(() => admin_rolesUpdateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutAdmin_role_accessesInput)
    update!: admin_rolesUpdateWithoutAdmin_role_accessesInput;

    @Field(() => admin_rolesCreateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdmin_role_accessesInput)
    create!: admin_rolesCreateWithoutAdmin_role_accessesInput;

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;
}
