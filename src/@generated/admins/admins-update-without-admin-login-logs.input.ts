import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateOneRequiredWithoutAdminsNestedInput } from '../admin-roles/admin-roles-update-one-required-without-admins-nested.input';
import { manual_adjustmentsUpdateManyWithoutAdminsNestedInput } from '../manual-adjustments/manual-adjustments-update-many-without-admins-nested.input';

@InputType()
export class adminsUpdateWithoutAdmin_login_logsInput {

    @Field(() => String, {nullable:true})
    admin_id?: string;

    @Field(() => String, {nullable:true})
    admin_name?: string;

    @Field(() => String, {nullable:true})
    admin_password?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => admin_rolesUpdateOneRequiredWithoutAdminsNestedInput, {nullable:true})
    admin_roles?: admin_rolesUpdateOneRequiredWithoutAdminsNestedInput;

    @Field(() => manual_adjustmentsUpdateManyWithoutAdminsNestedInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUpdateManyWithoutAdminsNestedInput;
}
