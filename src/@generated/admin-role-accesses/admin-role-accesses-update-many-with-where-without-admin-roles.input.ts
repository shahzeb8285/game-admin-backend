import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';
import { Type } from 'class-transformer';
import { admin_role_accessesUpdateManyMutationInput } from './admin-role-accesses-update-many-mutation.input';

@InputType()
export class admin_role_accessesUpdateManyWithWhereWithoutAdmin_rolesInput {

    @Field(() => admin_role_accessesScalarWhereInput, {nullable:false})
    @Type(() => admin_role_accessesScalarWhereInput)
    where!: admin_role_accessesScalarWhereInput;

    @Field(() => admin_role_accessesUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateManyMutationInput)
    data!: admin_role_accessesUpdateManyMutationInput;
}
