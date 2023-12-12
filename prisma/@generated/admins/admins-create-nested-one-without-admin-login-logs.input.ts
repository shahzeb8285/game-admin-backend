import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutAdmin_login_logsInput } from './admins-create-or-connect-without-admin-login-logs.input';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsCreateNestedOneWithoutAdmin_login_logsInput {

    @Field(() => adminsCreateWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => adminsCreateWithoutAdmin_login_logsInput)
    create?: adminsCreateWithoutAdmin_login_logsInput;

    @Field(() => adminsCreateOrConnectWithoutAdmin_login_logsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutAdmin_login_logsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutAdmin_login_logsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>;
}
