import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesInput } from './admin-role-accesses-unchecked-update-many-without-admin-accesses.input';

@InputType()
export class AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_accessesInput {

    @Field(() => AdminRoleAccessesScalarWhereInput, {nullable:false})
    @Type(() => AdminRoleAccessesScalarWhereInput)
    where!: AdminRoleAccessesScalarWhereInput;

    @Field(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesInput)
    data!: AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesInput;
}
