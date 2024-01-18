import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutAdmin_login_logsInput } from './admin-create-without-admin-login-logs.input';

@InputType()
export class AdminCreateOrConnectWithoutAdmin_login_logsInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => AdminCreateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminCreateWithoutAdmin_login_logsInput)
    create!: AdminCreateWithoutAdmin_login_logsInput;
}
