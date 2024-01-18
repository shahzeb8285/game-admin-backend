import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateWithoutRole_accessesInput } from './admin-roles-create-without-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateOrConnectWithoutRole_accessesInput } from './admin-roles-create-or-connect-without-role-accesses.input';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';

@InputType()
export class admin_rolesCreateNestedOneWithoutRole_accessesInput {

    @Field(() => admin_rolesCreateWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateWithoutRole_accessesInput)
    create?: admin_rolesCreateWithoutRole_accessesInput;

    @Field(() => admin_rolesCreateOrConnectWithoutRole_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateOrConnectWithoutRole_accessesInput)
    connectOrCreate?: admin_rolesCreateOrConnectWithoutRole_accessesInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    @Type(() => admin_rolesWhereUniqueInput)
    connect?: admin_rolesWhereUniqueInput;
}
