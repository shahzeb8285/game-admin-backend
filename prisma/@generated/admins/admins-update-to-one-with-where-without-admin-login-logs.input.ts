import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { AdminsUpdateWithoutAdmin_login_logsInput } from './admins-update-without-admin-login-logs.input';

@InputType()
export class AdminsUpdateToOneWithWhereWithoutAdmin_login_logsInput {

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;

    @Field(() => AdminsUpdateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => AdminsUpdateWithoutAdmin_login_logsInput)
    data!: AdminsUpdateWithoutAdmin_login_logsInput;
}
