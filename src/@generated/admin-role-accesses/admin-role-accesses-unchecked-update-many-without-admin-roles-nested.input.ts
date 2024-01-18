import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput } from './admin-role-accesses-create-or-connect-without-admin-roles.input';
import { AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_rolesInput } from './admin-role-accesses-upsert-with-where-unique-without-admin-roles.input';
import { AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope } from './admin-role-accesses-create-many-admin-roles-input-envelope.input';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_rolesInput } from './admin-role-accesses-update-with-where-unique-without-admin-roles.input';
import { AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_rolesInput } from './admin-role-accesses-update-many-with-where-without-admin-roles.input';
import { AdminRoleAccessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';

@InputType()
export class AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_rolesNestedInput {

    @Field(() => [AdminRoleAccessesCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_rolesInput)
    create?: Array<AdminRoleAccessesCreateWithoutAdmin_rolesInput>;

    @Field(() => [AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => [AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_rolesInput)
    upsert?: Array<AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope)
    createMany?: AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    set?: Array<AdminRoleAccessesWhereUniqueInput>;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    disconnect?: Array<AdminRoleAccessesWhereUniqueInput>;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    delete?: Array<AdminRoleAccessesWhereUniqueInput>;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    connect?: Array<AdminRoleAccessesWhereUniqueInput>;

    @Field(() => [AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_rolesInput)
    update?: Array<AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => [AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_rolesInput)
    updateMany?: Array<AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_rolesInput>;

    @Field(() => [AdminRoleAccessesScalarWhereInput], {nullable:true})
    @Type(() => AdminRoleAccessesScalarWhereInput)
    deleteMany?: Array<AdminRoleAccessesScalarWhereInput>;
}
