import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput } from './admin-role-accesses-create-or-connect-without-admin-roles.input';
import { AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope } from './admin-role-accesses-create-many-admin-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';

@InputType()
export class AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_rolesInput {

    @Field(() => [AdminRoleAccessesCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_rolesInput)
    create?: Array<AdminRoleAccessesCreateWithoutAdmin_rolesInput>;

    @Field(() => [AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<AdminRoleAccessesCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope)
    createMany?: AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AdminRoleAccessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;
}
