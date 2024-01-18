import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsUncheckedCreateNestedManyWithoutAdminsInput } from '../admin-login-logs/admin-login-logs-unchecked-create-nested-many-without-admins.input';

@InputType()
export class AdminsUncheckedCreateWithoutManual_adjustmentsInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    @Field(() => String, {nullable:false})
    admin_password!: string;

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_login_logsUncheckedCreateNestedManyWithoutAdminsInput, {nullable:true})
    admin_login_logs?: admin_login_logsUncheckedCreateNestedManyWithoutAdminsInput;
}
