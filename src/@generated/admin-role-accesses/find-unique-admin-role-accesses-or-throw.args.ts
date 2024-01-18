import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminRoleAccessesOrThrowArgs {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;
}
