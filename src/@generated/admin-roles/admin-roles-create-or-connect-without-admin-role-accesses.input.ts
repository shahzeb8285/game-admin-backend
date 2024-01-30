import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdmin_role_accessesInput } from './admin-roles-create-without-admin-role-accesses.input';

@InputType()
export class admin_rolesCreateOrConnectWithoutAdmin_role_accessesInput {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: admin_rolesWhereUniqueInput;

    @Field(() => admin_rolesCreateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdmin_role_accessesInput)
    create!: admin_rolesCreateWithoutAdmin_role_accessesInput;
}
