import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentUncheckedUpdateManyWithoutAdminsNestedInput } from '../manual-adjustment/manual-adjustment-unchecked-update-many-without-admins-nested.input';

@InputType()
export class AdminUncheckedUpdateWithoutAdmin_login_logsInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:true})
    admin_name?: string;

    @Field(() => String, {nullable:true})
    admin_password?: string;

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => ManualAdjustmentUncheckedUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: ManualAdjustmentUncheckedUpdateManyWithoutAdminsNestedInput;
}
