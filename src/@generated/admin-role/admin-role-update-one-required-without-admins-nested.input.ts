import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleCreateWithoutAdminsInput } from './admin-role-create-without-admins.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateOrConnectWithoutAdminsInput } from './admin-role-create-or-connect-without-admins.input';
import { AdminRoleUpsertWithoutAdminsInput } from './admin-role-upsert-without-admins.input';
import { Prisma } from '@prisma/client';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { AdminRoleUpdateToOneWithWhereWithoutAdminsInput } from './admin-role-update-to-one-with-where-without-admins.input';

@InputType()
export class AdminRoleUpdateOneRequiredWithoutAdminsNestedInput {

    @Field(() => AdminRoleCreateWithoutAdminsInput, {nullable:true})
    @Type(() => AdminRoleCreateWithoutAdminsInput)
    create?: AdminRoleCreateWithoutAdminsInput;

    @Field(() => AdminRoleCreateOrConnectWithoutAdminsInput, {nullable:true})
    @Type(() => AdminRoleCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: AdminRoleCreateOrConnectWithoutAdminsInput;

    @Field(() => AdminRoleUpsertWithoutAdminsInput, {nullable:true})
    @Type(() => AdminRoleUpsertWithoutAdminsInput)
    upsert?: AdminRoleUpsertWithoutAdminsInput;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:true})
    @Type(() => AdminRoleWhereUniqueInput)
    connect?: Prisma.AtLeast<AdminRoleWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => AdminRoleUpdateToOneWithWhereWithoutAdminsInput, {nullable:true})
    @Type(() => AdminRoleUpdateToOneWithWhereWithoutAdminsInput)
    update?: AdminRoleUpdateToOneWithWhereWithoutAdminsInput;
}
