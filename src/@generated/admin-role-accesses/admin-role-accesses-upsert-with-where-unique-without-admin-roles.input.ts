import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesUpdateWithoutAdmin_rolesInput } from './admin-role-accesses-update-without-admin-roles.input';
import { AdminRoleAccessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';

@InputType()
export class AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;

    @Field(() => AdminRoleAccessesUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminRoleAccessesUpdateWithoutAdmin_rolesInput)
    update!: AdminRoleAccessesUpdateWithoutAdmin_rolesInput;

    @Field(() => AdminRoleAccessesCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_rolesInput)
    create!: AdminRoleAccessesCreateWithoutAdmin_rolesInput;
}
