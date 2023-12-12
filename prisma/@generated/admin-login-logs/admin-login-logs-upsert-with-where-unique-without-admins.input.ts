import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_login_logsWhereUniqueInput } from './admin-login-logs-where-unique.input';
import { Type } from 'class-transformer';
import { admin_login_logsUpdateWithoutAdminsInput } from './admin-login-logs-update-without-admins.input';
import { admin_login_logsCreateWithoutAdminsInput } from './admin-login-logs-create-without-admins.input';

@InputType()
export class admin_login_logsUpsertWithWhereUniqueWithoutAdminsInput {

    @Field(() => admin_login_logsWhereUniqueInput, {nullable:false})
    @Type(() => admin_login_logsWhereUniqueInput)
    where!: Prisma.AtLeast<admin_login_logsWhereUniqueInput, 'login_id'>;

    @Field(() => admin_login_logsUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_login_logsUpdateWithoutAdminsInput)
    update!: admin_login_logsUpdateWithoutAdminsInput;

    @Field(() => admin_login_logsCreateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_login_logsCreateWithoutAdminsInput)
    create!: admin_login_logsCreateWithoutAdminsInput;
}
