import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleCreateWithoutRole_accessesInput } from './admin-role-create-without-role-accesses.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateOrConnectWithoutRole_accessesInput } from './admin-role-create-or-connect-without-role-accesses.input';
import { AdminRoleUpsertWithoutRole_accessesInput } from './admin-role-upsert-without-role-accesses.input';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { AdminRoleUpdateToOneWithWhereWithoutRole_accessesInput } from './admin-role-update-to-one-with-where-without-role-accesses.input';

@InputType()
export class AdminRoleUpdateOneRequiredWithoutRole_accessesNestedInput {

    @Field(() => AdminRoleCreateWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminRoleCreateWithoutRole_accessesInput)
    create?: AdminRoleCreateWithoutRole_accessesInput;

    @Field(() => AdminRoleCreateOrConnectWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminRoleCreateOrConnectWithoutRole_accessesInput)
    connectOrCreate?: AdminRoleCreateOrConnectWithoutRole_accessesInput;

    @Field(() => AdminRoleUpsertWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminRoleUpsertWithoutRole_accessesInput)
    upsert?: AdminRoleUpsertWithoutRole_accessesInput;

    @Field(() => AdminRoleWhereUniqueInput, {nullable:true})
    @Type(() => AdminRoleWhereUniqueInput)
    connect?: AdminRoleWhereUniqueInput;

    @Field(() => AdminRoleUpdateToOneWithWhereWithoutRole_accessesInput, {nullable:true})
    @Type(() => AdminRoleUpdateToOneWithWhereWithoutRole_accessesInput)
    update?: AdminRoleUpdateToOneWithWhereWithoutRole_accessesInput;
}
