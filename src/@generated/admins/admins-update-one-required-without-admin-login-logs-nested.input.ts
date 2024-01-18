import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutAdmin_login_logsInput } from './admins-create-or-connect-without-admin-login-logs.input';
import { adminsUpsertWithoutAdmin_login_logsInput } from './admins-upsert-without-admin-login-logs.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateToOneWithWhereWithoutAdmin_login_logsInput } from './admins-update-to-one-with-where-without-admin-login-logs.input';

@InputType()
export class adminsUpdateOneRequiredWithoutAdmin_login_logsNestedInput {

    @Field(() => adminsCreateWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => adminsCreateWithoutAdmin_login_logsInput)
    create?: adminsCreateWithoutAdmin_login_logsInput;

    @Field(() => adminsCreateOrConnectWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutAdmin_login_logsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutAdmin_login_logsInput;

    @Field(() => adminsUpsertWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => adminsUpsertWithoutAdmin_login_logsInput)
    upsert?: adminsUpsertWithoutAdmin_login_logsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;

    @Field(() => adminsUpdateToOneWithWhereWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => adminsUpdateToOneWithWhereWithoutAdmin_login_logsInput)
    update?: adminsUpdateToOneWithWhereWithoutAdmin_login_logsInput;
}
