import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { AdminsCreateOrConnectWithoutAdmin_login_logsInput } from './admins-create-or-connect-without-admin-login-logs.input';
import { AdminsUpsertWithoutAdmin_login_logsInput } from './admins-upsert-without-admin-login-logs.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { AdminsUpdateToOneWithWhereWithoutAdmin_login_logsInput } from './admins-update-to-one-with-where-without-admin-login-logs.input';

@InputType()
export class AdminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput {

    @Field(() => AdminsCreateWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminsCreateWithoutAdmin_login_logsInput)
    create?: AdminsCreateWithoutAdmin_login_logsInput;

    @Field(() => AdminsCreateOrConnectWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminsCreateOrConnectWithoutAdmin_login_logsInput)
    connectOrCreate?: AdminsCreateOrConnectWithoutAdmin_login_logsInput;

    @Field(() => AdminsUpsertWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminsUpsertWithoutAdmin_login_logsInput)
    upsert?: AdminsUpsertWithoutAdmin_login_logsInput;

    @Field(() => AdminsWhereUniqueInput, {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    connect?: AdminsWhereUniqueInput;

    @Field(() => AdminsUpdateToOneWithWhereWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminsUpdateToOneWithWhereWithoutAdmin_login_logsInput)
    update?: AdminsUpdateToOneWithWhereWithoutAdmin_login_logsInput;
}
