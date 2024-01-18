import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesInput } from './admin-role-accesses-unchecked-update-many-without-admin-roles.input';

@InputType()
export class AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_rolesInput {

    @Field(() => AdminRoleAccessesScalarWhereInput, {nullable:false})
    @Type(() => AdminRoleAccessesScalarWhereInput)
    where!: AdminRoleAccessesScalarWhereInput;

    @Field(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesInput)
    data!: AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesInput;
}
