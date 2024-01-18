import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminLoginLogArgs {

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => AdminLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<AdminLoginLogWhereUniqueInput, 'login_id'>;
}
