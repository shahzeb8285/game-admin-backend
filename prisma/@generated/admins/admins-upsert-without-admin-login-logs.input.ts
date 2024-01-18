import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsUpdateWithoutAdmin_login_logsInput } from './admins-update-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { AdminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';
import { AdminsWhereInput } from './admins-where.input';

@InputType()
export class AdminsUpsertWithoutAdmin_login_logsInput {

    @Field(() => AdminsUpdateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminsUpdateWithoutAdmin_login_logsInput)
    update!: AdminsUpdateWithoutAdmin_login_logsInput;

    @Field(() => AdminsCreateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminsCreateWithoutAdmin_login_logsInput)
    create!: AdminsCreateWithoutAdmin_login_logsInput;

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;
}
