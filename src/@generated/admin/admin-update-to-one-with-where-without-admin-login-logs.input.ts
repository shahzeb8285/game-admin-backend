import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { Type } from 'class-transformer';
import { AdminUpdateWithoutAdmin_login_logsInput } from './admin-update-without-admin-login-logs.input';

@InputType()
export class AdminUpdateToOneWithWhereWithoutAdmin_login_logsInput {

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;

    @Field(() => AdminUpdateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminUpdateWithoutAdmin_login_logsInput)
    data!: AdminUpdateWithoutAdmin_login_logsInput;
}
