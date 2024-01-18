import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { AdminLoginLogCreateWithoutAdminsInput } from './admin-login-log-create-without-admins.input';

@InputType()
export class AdminLoginLogCreateOrConnectWithoutAdminsInput {

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => AdminLoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<AdminLoginLogWhereUniqueInput, 'login_id'>;

    @Field(() => AdminLoginLogCreateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminLoginLogCreateWithoutAdminsInput)
    create!: AdminLoginLogCreateWithoutAdminsInput;
}
