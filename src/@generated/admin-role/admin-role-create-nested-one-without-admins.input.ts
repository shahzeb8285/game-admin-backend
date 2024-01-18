import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleCreateWithoutAdminsInput } from './admin-role-create-without-admins.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateOrConnectWithoutAdminsInput } from './admin-role-create-or-connect-without-admins.input';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';

@InputType()
export class AdminRoleCreateNestedOneWithoutAdminsInput {

    @Field(() => AdminRoleCreateWithoutAdminsInput, {nullable:true})
    @Type(() => AdminRoleCreateWithoutAdminsInput)
    create?: AdminRoleCreateWithoutAdminsInput;

    @Field(() => AdminRoleCreateOrConnectWithoutAdminsInput, {nullable:true})
    @Type(() => AdminRoleCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: AdminRoleCreateOrConnectWithoutAdminsInput;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:true})
    @Type(() => AdminRoleWhereUniqueInput)
    connect?: AdminRoleWhereUniqueInput;
}
