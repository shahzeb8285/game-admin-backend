import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutAdmin_login_logsInput } from './admins-update-without-admin-login-logs.input';

@InputType()
export class adminsUpdateToOneWithWhereWithoutAdmin_login_logsInput {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => adminsUpdateWithoutAdmin_login_logsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutAdmin_login_logsInput)
    data!: adminsUpdateWithoutAdmin_login_logsInput;
}
