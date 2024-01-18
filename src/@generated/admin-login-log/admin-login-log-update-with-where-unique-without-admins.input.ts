import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { Type } from 'class-transformer';
import { AdminLoginLogUpdateWithoutAdminsInput } from './admin-login-log-update-without-admins.input';

@InputType()
export class AdminLoginLogUpdateWithWhereUniqueWithoutAdminsInput {

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => AdminLoginLogWhereUniqueInput)
    where!: AdminLoginLogWhereUniqueInput;

    @Field(() => AdminLoginLogUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminLoginLogUpdateWithoutAdminsInput)
    data!: AdminLoginLogUpdateWithoutAdminsInput;
}
