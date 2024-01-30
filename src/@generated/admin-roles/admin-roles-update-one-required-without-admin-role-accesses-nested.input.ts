import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateWithoutAdmin_role_accessesInput } from './admin-roles-create-without-admin-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateOrConnectWithoutAdmin_role_accessesInput } from './admin-roles-create-or-connect-without-admin-role-accesses.input';
import { admin_rolesUpsertWithoutAdmin_role_accessesInput } from './admin-roles-upsert-without-admin-role-accesses.input';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { admin_rolesUpdateToOneWithWhereWithoutAdmin_role_accessesInput } from './admin-roles-update-to-one-with-where-without-admin-role-accesses.input';

@InputType()
export class admin_rolesUpdateOneRequiredWithoutAdmin_role_accessesNestedInput {

    @Field(() => admin_rolesCreateWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateWithoutAdmin_role_accessesInput)
    create?: admin_rolesCreateWithoutAdmin_role_accessesInput;

    @Field(() => admin_rolesCreateOrConnectWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateOrConnectWithoutAdmin_role_accessesInput)
    connectOrCreate?: admin_rolesCreateOrConnectWithoutAdmin_role_accessesInput;

    @Field(() => admin_rolesUpsertWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_rolesUpsertWithoutAdmin_role_accessesInput)
    upsert?: admin_rolesUpsertWithoutAdmin_role_accessesInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    @Type(() => admin_rolesWhereUniqueInput)
    connect?: admin_rolesWhereUniqueInput;

    @Field(() => admin_rolesUpdateToOneWithWhereWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_rolesUpdateToOneWithWhereWithoutAdmin_role_accessesInput)
    update?: admin_rolesUpdateToOneWithWhereWithoutAdmin_role_accessesInput;
}
