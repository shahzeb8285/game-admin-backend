import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogCreateInput } from './admin-login-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminLoginLogArgs {

    @Field(() => AdminLoginLogCreateInput, {nullable:false})
    @Type(() => AdminLoginLogCreateInput)
    data!: AdminLoginLogCreateInput;
}
