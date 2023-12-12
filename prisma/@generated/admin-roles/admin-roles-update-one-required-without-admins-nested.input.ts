import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateWithoutAdminsInput } from './admin-roles-create-without-admins.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateOrConnectWithoutAdminsInput } from './admin-roles-create-or-connect-without-admins.input';
import { admin_rolesUpsertWithoutAdminsInput } from './admin-roles-upsert-without-admins.input';
import { Prisma } from '@prisma/client';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { admin_rolesUpdateToOneWithWhereWithoutAdminsInput } from './admin-roles-update-to-one-with-where-without-admins.input';

@InputType()
export class admin_rolesUpdateOneRequiredWithoutAdminsNestedInput {

    @Field(() => admin_rolesCreateWithoutAdminsInput, {nullable:true})
    @Type(() => admin_rolesCreateWithoutAdminsInput)
    create?: admin_rolesCreateWithoutAdminsInput;

    @Field(() => admin_rolesCreateOrConnectWithoutAdminsInput, {nullable:true})
    @Type(() => admin_rolesCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: admin_rolesCreateOrConnectWithoutAdminsInput;

    @Field(() => admin_rolesUpsertWithoutAdminsInput, {nullable:true})
    @Type(() => admin_rolesUpsertWithoutAdminsInput)
    upsert?: admin_rolesUpsertWithoutAdminsInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    @Type(() => admin_rolesWhereUniqueInput)
    connect?: Prisma.AtLeast<admin_rolesWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => admin_rolesUpdateToOneWithWhereWithoutAdminsInput, {nullable:true})
    @Type(() => admin_rolesUpdateToOneWithWhereWithoutAdminsInput)
    update?: admin_rolesUpdateToOneWithWhereWithoutAdminsInput;
}
