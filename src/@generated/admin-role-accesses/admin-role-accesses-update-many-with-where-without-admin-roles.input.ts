import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';
import { Type } from 'class-transformer';
import { admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesInput } from './admin-role-accesses-unchecked-update-many-without-admin-roles.input';

@InputType()
export class admin_role_accessesUpdateManyWithWhereWithoutAdmin_rolesInput {

    @Field(() => admin_role_accessesScalarWhereInput, {nullable:false})
    @Type(() => admin_role_accessesScalarWhereInput)
    where!: admin_role_accessesScalarWhereInput;

    @Field(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesInput)
    data!: admin_role_accessesUncheckedUpdateManyWithoutAdmin_rolesInput;
}
