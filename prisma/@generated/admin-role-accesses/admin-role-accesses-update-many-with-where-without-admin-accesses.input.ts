import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';
import { Type } from 'class-transformer';
import { admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesInput } from './admin-role-accesses-unchecked-update-many-without-admin-accesses.input';

@InputType()
export class admin_role_accessesUpdateManyWithWhereWithoutAdmin_accessesInput {

    @Field(() => admin_role_accessesScalarWhereInput, {nullable:false})
    @Type(() => admin_role_accessesScalarWhereInput)
    where!: admin_role_accessesScalarWhereInput;

    @Field(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesInput)
    data!: admin_role_accessesUncheckedUpdateManyWithoutAdmin_accessesInput;
}
