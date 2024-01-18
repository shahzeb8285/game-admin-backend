import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsScalarWhereInput } from './admins-scalar-where.input';
import { Type } from 'class-transformer';
import { AdminsUpdateManyMutationInput } from './admins-update-many-mutation.input';

@InputType()
export class AdminsUpdateManyWithWhereWithoutAdmin_rolesInput {

    @Field(() => AdminsScalarWhereInput, {nullable:false})
    @Type(() => AdminsScalarWhereInput)
    where!: AdminsScalarWhereInput;

    @Field(() => AdminsUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminsUpdateManyMutationInput)
    data!: AdminsUpdateManyMutationInput;
}
