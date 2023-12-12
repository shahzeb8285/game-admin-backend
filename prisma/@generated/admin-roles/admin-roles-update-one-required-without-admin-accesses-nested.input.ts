import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateWithoutAdmin_accessesInput } from './admin-roles-create-without-admin-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateOrConnectWithoutAdmin_accessesInput } from './admin-roles-create-or-connect-without-admin-accesses.input';
import { admin_rolesUpsertWithoutAdmin_accessesInput } from './admin-roles-upsert-without-admin-accesses.input';
import { Prisma } from '@prisma/client';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { admin_rolesUpdateToOneWithWhereWithoutAdmin_accessesInput } from './admin-roles-update-to-one-with-where-without-admin-accesses.input';

@InputType()
export class admin_rolesUpdateOneRequiredWithoutAdmin_accessesNestedInput {

    @Field(() => admin_rolesCreateWithoutAdmin_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateWithoutAdmin_accessesInput)
    create?: admin_rolesCreateWithoutAdmin_accessesInput;

    @Field(() => admin_rolesCreateOrConnectWithoutAdmin_accessesInput, {nullable:true})
    @Type(() => admin_rolesCreateOrConnectWithoutAdmin_accessesInput)
    connectOrCreate?: admin_rolesCreateOrConnectWithoutAdmin_accessesInput;

    @Field(() => admin_rolesUpsertWithoutAdmin_accessesInput, {nullable:true})
    @Type(() => admin_rolesUpsertWithoutAdmin_accessesInput)
    upsert?: admin_rolesUpsertWithoutAdmin_accessesInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    @Type(() => admin_rolesWhereUniqueInput)
    connect?: Prisma.AtLeast<admin_rolesWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => admin_rolesUpdateToOneWithWhereWithoutAdmin_accessesInput, {nullable:true})
    @Type(() => admin_rolesUpdateToOneWithWhereWithoutAdmin_accessesInput)
    update?: admin_rolesUpdateToOneWithWhereWithoutAdmin_accessesInput;
}
