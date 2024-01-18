import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateWithoutAdminsInput } from './admin-role-create-without-admins.input';

@InputType()
export class AdminRoleCreateOrConnectWithoutAdminsInput {

    @Field(() => AdminRoleWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => AdminRoleCreateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminRoleCreateWithoutAdminsInput)
    create!: AdminRoleCreateWithoutAdminsInput;
}
