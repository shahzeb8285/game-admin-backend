import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdminLoginLogArgs {

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    @Type(() => AdminLoginLogWhereInput)
    where?: AdminLoginLogWhereInput;
}
