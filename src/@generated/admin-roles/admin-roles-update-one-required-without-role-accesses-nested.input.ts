import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateWithoutRole_accessesInput } from './admin-roles-create-without-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateOrConnectWithoutRole_accessesInput } from './admin-roles-create-or-connect-without-role-accesses.input';
import { admin_rolesUpsertWithoutRole_accessesInput } from './admin-roles-upsert-without-role-accesses.input';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { admin_rolesUpdateToOneWithWhereWithoutRole_accessesInput } from './admin-roles-update-to-one-with-where-without-role-accesses.input';

@InputType()
export class admin_rolesUpdateOneRequiredWithoutRole_accessesNestedInput {

    @Field(() => admin_rolesCreateWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateWithoutRole_accessesInput)
    create?: admin_rolesCreateWithoutRole_accessesInput;

    @Field(() => admin_rolesCreateOrConnectWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateOrConnectWithoutRole_accessesInput)
    connectOrCreate?: admin_rolesCreateOrConnectWithoutRole_accessesInput;

    @Field(() => admin_rolesUpsertWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_rolesUpsertWithoutRole_accessesInput)
    upsert?: admin_rolesUpsertWithoutRole_accessesInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    @Type(() => admin_rolesWhereUniqueInput)
    connect?: admin_rolesWhereUniqueInput;

    @Field(() => admin_rolesUpdateToOneWithWhereWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_rolesUpdateToOneWithWhereWithoutRole_accessesInput)
    update?: admin_rolesUpdateToOneWithWhereWithoutRole_accessesInput;
}
