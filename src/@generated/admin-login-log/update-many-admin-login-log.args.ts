import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogUpdateManyMutationInput } from './admin-login-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';

@ArgsType()
export class UpdateManyAdminLoginLogArgs {

    @Field(() => AdminLoginLogUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminLoginLogUpdateManyMutationInput)
    data!: AdminLoginLogUpdateManyMutationInput;

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    @Type(() => AdminLoginLogWhereInput)
    where?: AdminLoginLogWhereInput;
}
