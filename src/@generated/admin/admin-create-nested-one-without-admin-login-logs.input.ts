import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutAdmin_login_logsInput } from './admin-create-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutAdmin_login_logsInput } from './admin-create-or-connect-without-admin-login-logs.input';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminCreateNestedOneWithoutAdmin_login_logsInput {

    @Field(() => AdminCreateWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminCreateWithoutAdmin_login_logsInput)
    create?: AdminCreateWithoutAdmin_login_logsInput;

    @Field(() => AdminCreateOrConnectWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutAdmin_login_logsInput)
    connectOrCreate?: AdminCreateOrConnectWithoutAdmin_login_logsInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;
}
