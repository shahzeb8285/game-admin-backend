import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleUpdateInput } from './admin-role-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';

@ArgsType()
export class UpdateOneAdminRoleArgs {

    @Field(() => AdminRoleUpdateInput, {nullable:false})
    @Type(() => AdminRoleUpdateInput)
    data!: AdminRoleUpdateInput;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleWhereUniqueInput)
    where!: Prisma.AtLeast<AdminRoleWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;
}