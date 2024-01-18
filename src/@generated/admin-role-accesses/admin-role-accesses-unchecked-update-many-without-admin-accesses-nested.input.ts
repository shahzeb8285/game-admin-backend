import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateWithoutAdmin_accessesInput } from './admin-role-accesses-create-without-admin-accesses.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput } from './admin-role-accesses-create-or-connect-without-admin-accesses.input';
import { AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_accessesInput } from './admin-role-accesses-upsert-with-where-unique-without-admin-accesses.input';
import { AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope } from './admin-role-accesses-create-many-admin-accesses-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_accessesInput } from './admin-role-accesses-update-with-where-unique-without-admin-accesses.input';
import { AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_accessesInput } from './admin-role-accesses-update-many-with-where-without-admin-accesses.input';
import { AdminRoleAccessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';

@InputType()
export class AdminRoleAccessesUncheckedUpdateManyWithoutAdmin_accessesNestedInput {

    @Field(() => [AdminRoleAccessesCreateWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_accessesInput)
    create?: Array<AdminRoleAccessesCreateWithoutAdmin_accessesInput>;

    @Field(() => [AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput)
    connectOrCreate?: Array<AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput>;

    @Field(() => [AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_accessesInput)
    upsert?: Array<AdminRoleAccessesUpsertWithWhereUniqueWithoutAdmin_accessesInput>;

    @Field(() => AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope, {nullable:true})
    @Type(() => AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope)
    createMany?: AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;

    @Field(() => [AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_accessesInput)
    update?: Array<AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_accessesInput>;

    @Field(() => [AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_accessesInput)
    updateMany?: Array<AdminRoleAccessesUpdateManyWithWhereWithoutAdmin_accessesInput>;

    @Field(() => [AdminRoleAccessesScalarWhereInput], {nullable:true})
    @Type(() => AdminRoleAccessesScalarWhereInput)
    deleteMany?: Array<AdminRoleAccessesScalarWhereInput>;
}
