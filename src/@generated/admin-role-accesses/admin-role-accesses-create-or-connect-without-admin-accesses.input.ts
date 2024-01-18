import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateWithoutAdmin_accessesInput } from './admin-role-accesses-create-without-admin-accesses.input';

@InputType()
export class AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;

    @Field(() => AdminRoleAccessesCreateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_accessesInput)
    create!: AdminRoleAccessesCreateWithoutAdmin_accessesInput;
}
