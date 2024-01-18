import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateInput } from './admin-role-accesses-create.input';
import { AdminRoleAccessesUpdateInput } from './admin-role-accesses-update.input';

@ArgsType()
export class UpsertOneAdminRoleAccessesArgs {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;

    @Field(() => AdminRoleAccessesCreateInput, {nullable:false})
    @Type(() => AdminRoleAccessesCreateInput)
    create!: AdminRoleAccessesCreateInput;

    @Field(() => AdminRoleAccessesUpdateInput, {nullable:false})
    @Type(() => AdminRoleAccessesUpdateInput)
    update!: AdminRoleAccessesUpdateInput;
}
