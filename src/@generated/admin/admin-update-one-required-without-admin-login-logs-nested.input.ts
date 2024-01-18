import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutAdmin_login_logsInput } from './admin-create-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutAdmin_login_logsInput } from './admin-create-or-connect-without-admin-login-logs.input';
import { AdminUpsertWithoutAdmin_login_logsInput } from './admin-upsert-without-admin-login-logs.input';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateToOneWithWhereWithoutAdmin_login_logsInput } from './admin-update-to-one-with-where-without-admin-login-logs.input';

@InputType()
export class AdminUpdateOneRequiredWithoutAdmin_login_logsNestedInput {

    @Field(() => AdminCreateWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminCreateWithoutAdmin_login_logsInput)
    create?: AdminCreateWithoutAdmin_login_logsInput;

    @Field(() => AdminCreateOrConnectWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutAdmin_login_logsInput)
    connectOrCreate?: AdminCreateOrConnectWithoutAdmin_login_logsInput;

    @Field(() => AdminUpsertWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminUpsertWithoutAdmin_login_logsInput)
    upsert?: AdminUpsertWithoutAdmin_login_logsInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => AdminUpdateToOneWithWhereWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminUpdateToOneWithWhereWithoutAdmin_login_logsInput)
    update?: AdminUpdateToOneWithWhereWithoutAdmin_login_logsInput;
}
