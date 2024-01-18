import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogUncheckedCreateNestedManyWithoutAdminsInput } from '../admin-login-log/admin-login-log-unchecked-create-nested-many-without-admins.input';
import { ManualAdjustmentUncheckedCreateNestedManyWithoutAdminsInput } from '../manual-adjustment/manual-adjustment-unchecked-create-nested-many-without-admins.input';

@InputType()
export class AdminUncheckedCreateWithoutAdmin_rolesInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    @Field(() => String, {nullable:false})
    admin_password!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => AdminLoginLogUncheckedCreateNestedManyWithoutAdminsInput, {nullable:true})
    admin_login_logs?: AdminLoginLogUncheckedCreateNestedManyWithoutAdminsInput;

    @Field(() => ManualAdjustmentUncheckedCreateNestedManyWithoutAdminsInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUncheckedCreateNestedManyWithoutAdminsInput;
}
