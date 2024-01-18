import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleCreateWithoutRole_accessesInput } from './admin-role-create-without-role-accesses.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateOrConnectWithoutRole_accessesInput } from './admin-role-create-or-connect-without-role-accesses.input';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';

@InputType()
export class AdminRoleCreateNestedOneWithoutRole_accessesInput {

    @Field(() => AdminRoleCreateWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminRoleCreateWithoutRole_accessesInput)
    create?: AdminRoleCreateWithoutRole_accessesInput;

    @Field(() => AdminRoleCreateOrConnectWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminRoleCreateOrConnectWithoutRole_accessesInput)
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRole_accessesInput;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:true})
    @Type(() => AdminRoleWhereUniqueInput)
    connect?: AdminRoleWhereUniqueInput;
}
