import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput } from './admin-role-accesses-create-or-connect-without-admin-roles.input';
import { admin_role_accessesCreateManyAdmin_rolesInputEnvelope } from './admin-role-accesses-create-many-admin-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';

@InputType()
export class admin_role_accessesCreateNestedManyWithoutAdmin_rolesInput {

    @Field(() => [admin_role_accessesCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateWithoutAdmin_rolesInput)
    create?: Array<admin_role_accessesCreateWithoutAdmin_rolesInput>;

    @Field(() => [admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => admin_role_accessesCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => admin_role_accessesCreateManyAdmin_rolesInputEnvelope)
    createMany?: admin_role_accessesCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<admin_role_accessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;
}
