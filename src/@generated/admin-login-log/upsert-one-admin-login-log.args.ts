import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { AdminLoginLogCreateInput } from './admin-login-log-create.input';
import { AdminLoginLogUpdateInput } from './admin-login-log-update.input';

@ArgsType()
export class UpsertOneAdminLoginLogArgs {

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => AdminLoginLogWhereUniqueInput)
    where!: AdminLoginLogWhereUniqueInput;

    @Field(() => AdminLoginLogCreateInput, {nullable:false})
    @Type(() => AdminLoginLogCreateInput)
    create!: AdminLoginLogCreateInput;

    @Field(() => AdminLoginLogUpdateInput, {nullable:false})
    @Type(() => AdminLoginLogUpdateInput)
    update!: AdminLoginLogUpdateInput;
}
