import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminRoleOrThrowArgs {

    @Field(() => AdminRoleWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;
}
