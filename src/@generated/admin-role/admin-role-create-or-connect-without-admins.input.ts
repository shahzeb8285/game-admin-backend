import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateWithoutAdminsInput } from './admin-role-create-without-admins.input';

@InputType()
export class AdminRoleCreateOrConnectWithoutAdminsInput {

    @Field(() => AdminRoleWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleWhereUniqueInput)
    where!: AdminRoleWhereUniqueInput;

    @Field(() => AdminRoleCreateWithoutAdminsInput, {nullable:false})
    @Type(() => AdminRoleCreateWithoutAdminsInput)
    create!: AdminRoleCreateWithoutAdminsInput;
}
