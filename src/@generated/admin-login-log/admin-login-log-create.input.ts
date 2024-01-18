import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateNestedOneWithoutAdmin_login_logsInput } from '../admin/admin-create-nested-one-without-admin-login-logs.input';

@InputType()
export class AdminLoginLogCreateInput {

    @Field(() => String, {nullable:true})
    login_id?: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => AdminCreateNestedOneWithoutAdmin_login_logsInput, {nullable:false})
    admins!: AdminCreateNestedOneWithoutAdmin_login_logsInput;
}
