import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminScalarWhereInput } from './admin-scalar-where.input';
import { Type } from 'class-transformer';
import { AdminUpdateManyMutationInput } from './admin-update-many-mutation.input';

@InputType()
export class AdminUpdateManyWithWhereWithoutAdmin_rolesInput {

    @Field(() => AdminScalarWhereInput, {nullable:false})
    @Type(() => AdminScalarWhereInput)
    where!: AdminScalarWhereInput;

    @Field(() => AdminUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminUpdateManyMutationInput)
    data!: AdminUpdateManyMutationInput;
}
