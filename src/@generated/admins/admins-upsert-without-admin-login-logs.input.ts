import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateWithoutAdmin_login_logsInput } from './admins-update-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutAdmin_login_logsInput } from './admins-create-without-admin-login-logs.input';
import { adminsWhereInput } from './admins-where.input';

@InputType()
export class adminsUpsertWithoutAdmin_login_logsInput {

    @Field(() => adminsUpdateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutAdmin_login_logsInput)
    update!: adminsUpdateWithoutAdmin_login_logsInput;

    @Field(() => adminsCreateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => adminsCreateWithoutAdmin_login_logsInput)
    create!: adminsCreateWithoutAdmin_login_logsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
