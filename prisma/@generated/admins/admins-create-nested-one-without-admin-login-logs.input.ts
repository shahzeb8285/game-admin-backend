import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { AdminsCreateOrConnectWithoutAdmin_login_logsInput } from './admins-create-or-connect-without-admin-login-logs.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class AdminsCreateNestedOneWithoutAdmin_login_logsInput {

    @Field(() => AdminsCreateWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminsCreateWithoutAdmin_login_logsInput)
    create?: AdminsCreateWithoutAdmin_login_logsInput;

    @Field(() => AdminsCreateOrConnectWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminsCreateOrConnectWithoutAdmin_login_logsInput)
    connectOrCreate?: AdminsCreateOrConnectWithoutAdmin_login_logsInput;

    @Field(() => AdminsWhereUniqueInput, {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    connect?: AdminsWhereUniqueInput;
}
