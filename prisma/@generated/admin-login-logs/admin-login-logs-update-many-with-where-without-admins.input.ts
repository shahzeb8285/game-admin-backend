import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsScalarWhereInput } from './admin-login-logs-scalar-where.input';
import { Type } from 'class-transformer';
import { admin_login_logsUpdateManyMutationInput } from './admin-login-logs-update-many-mutation.input';

@InputType()
export class admin_login_logsUpdateManyWithWhereWithoutAdminsInput {

    @Field(() => admin_login_logsScalarWhereInput, {nullable:false})
    @Type(() => admin_login_logsScalarWhereInput)
    where!: admin_login_logsScalarWhereInput;

    @Field(() => admin_login_logsUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_login_logsUpdateManyMutationInput)
    data!: admin_login_logsUpdateManyMutationInput;
}
