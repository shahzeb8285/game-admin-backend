import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogCreateNestedManyWithoutAdminsInput } from '../admin-login-log/admin-login-log-create-nested-many-without-admins.input';
import { ManualAdjustmentCreateNestedManyWithoutAdminsInput } from '../manual-adjustment/manual-adjustment-create-nested-many-without-admins.input';

@InputType()
export class AdminCreateWithoutAdmin_rolesInput {

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

    @Field(() => AdminLoginLogCreateNestedManyWithoutAdminsInput, {nullable:true})
    admin_login_logs?: AdminLoginLogCreateNestedManyWithoutAdminsInput;

    @Field(() => ManualAdjustmentCreateNestedManyWithoutAdminsInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentCreateNestedManyWithoutAdminsInput;
}