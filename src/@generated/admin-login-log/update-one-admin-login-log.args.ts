import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogUpdateInput } from './admin-login-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';

@ArgsType()
export class UpdateOneAdminLoginLogArgs {

    @Field(() => AdminLoginLogUpdateInput, {nullable:false})
    @Type(() => AdminLoginLogUpdateInput)
    data!: AdminLoginLogUpdateInput;

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => AdminLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<AdminLoginLogWhereUniqueInput, 'login_id'>;
}
