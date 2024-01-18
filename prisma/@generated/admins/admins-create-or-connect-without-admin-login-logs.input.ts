import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { AdminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';

@InputType()
export class AdminsCreateOrConnectWithoutAdmin_login_logsInput {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;

    @Field(() => AdminsCreateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminsCreateWithoutAdmin_login_logsInput)
    create!: AdminsCreateWithoutAdmin_login_logsInput;
}
