import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogScalarWhereInput } from './admin-login-log-scalar-where.input';
import { Type } from 'class-transformer';
import { AdminLoginLogUpdateManyMutationInput } from './admin-login-log-update-many-mutation.input';

@InputType()
export class AdminLoginLogUpdateManyWithWhereWithoutAdminsInput {

    @Field(() => AdminLoginLogScalarWhereInput, {nullable:false})
    @Type(() => AdminLoginLogScalarWhereInput)
    where!: AdminLoginLogScalarWhereInput;

    @Field(() => AdminLoginLogUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminLoginLogUpdateManyMutationInput)
    data!: AdminLoginLogUpdateManyMutationInput;
}
