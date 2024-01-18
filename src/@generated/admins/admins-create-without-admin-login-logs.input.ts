import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesCreateNestedOneWithoutAdminsInput } from '../admin-roles/admin-roles-create-nested-one-without-admins.input';
import { manual_adjustmentsCreateNestedManyWithoutAdminsInput } from '../manual-adjustments/manual-adjustments-create-nested-many-without-admins.input';

@InputType()
export class adminsCreateWithoutAdmin_login_logsInput {

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

    @Field(() => admin_rolesCreateNestedOneWithoutAdminsInput, {nullable:false})
    admin_roles!: admin_rolesCreateNestedOneWithoutAdminsInput;

    @Field(() => manual_adjustmentsCreateNestedManyWithoutAdminsInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsCreateNestedManyWithoutAdminsInput;
}
