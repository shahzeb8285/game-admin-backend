import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateWithoutAdmin_login_logsInput } from './admin-update-without-admin-login-logs.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutAdmin_login_logsInput } from './admin-create-without-admin-login-logs.input';
import { AdminWhereInput } from './admin-where.input';

@InputType()
export class AdminUpsertWithoutAdmin_login_logsInput {

    @Field(() => AdminUpdateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminUpdateWithoutAdmin_login_logsInput)
    update!: AdminUpdateWithoutAdmin_login_logsInput;

    @Field(() => AdminCreateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminCreateWithoutAdmin_login_logsInput)
    create!: AdminCreateWithoutAdmin_login_logsInput;

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;
}
