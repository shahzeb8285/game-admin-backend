import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateNestedOneWithoutAdmin_login_logsInput } from '../admins/admins-create-nested-one-without-admin-login-logs.input';

@InputType()
export class admin_login_logsCreateInput {

    @Field(() => String, {nullable:true})
    login_id?: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;

    @Field(() => AdminsCreateNestedOneWithoutAdmin_login_logsInput, {nullable:false})
    admins!: AdminsCreateNestedOneWithoutAdmin_login_logsInput;
}
