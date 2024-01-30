import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';

@InputType()
export class adminsCreateOrConnectWithoutAdmin_login_logsInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsCreateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => adminsCreateWithoutAdmin_login_logsInput)
    create!: adminsCreateWithoutAdmin_login_logsInput;
}
