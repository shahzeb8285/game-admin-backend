import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesUpdateInput } from './admin-role-accesses-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';

@ArgsType()
export class UpdateOneAdminRoleAccessesArgs {

    @Field(() => AdminRoleAccessesUpdateInput, {nullable:false})
    @Type(() => AdminRoleAccessesUpdateInput)
    data!: AdminRoleAccessesUpdateInput;

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;
}
