import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateWithoutRole_accessesInput } from './admin-role-create-without-role-accesses.input';

@InputType()
export class AdminRoleCreateOrConnectWithoutRole_accessesInput {

    @Field(() => AdminRoleWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => AdminRoleCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => AdminRoleCreateWithoutRole_accessesInput)
    create!: AdminRoleCreateWithoutRole_accessesInput;
}
