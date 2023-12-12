import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateWithoutAdminsInput } from './admin-roles-create-without-admins.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateOrConnectWithoutAdminsInput } from './admin-roles-create-or-connect-without-admins.input';
import { Prisma } from '@prisma/client';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';

@InputType()
export class admin_rolesCreateNestedOneWithoutAdminsInput {

    @Field(() => admin_rolesCreateWithoutAdminsInput, {nullable:true})
    @Type(() => admin_rolesCreateWithoutAdminsInput)
    create?: admin_rolesCreateWithoutAdminsInput;

    @Field(() => admin_rolesCreateOrConnectWithoutAdminsInput, {nullable:true})
    @Type(() => admin_rolesCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: admin_rolesCreateOrConnectWithoutAdminsInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:true})
    @Type(() => admin_rolesWhereUniqueInput)
    connect?: Prisma.AtLeast<admin_rolesWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;
}
