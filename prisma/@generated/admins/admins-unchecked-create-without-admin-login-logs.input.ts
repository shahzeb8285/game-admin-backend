import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsUncheckedCreateNestedManyWithoutAdminsInput } from '../manual-adjustments/manual-adjustments-unchecked-create-nested-many-without-admins.input';

@InputType()
export class AdminsUncheckedCreateWithoutAdmin_login_logsInput {

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

    @Field(() => manual_adjustmentsUncheckedCreateNestedManyWithoutAdminsInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsUncheckedCreateNestedManyWithoutAdminsInput;
}
