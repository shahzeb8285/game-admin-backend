import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_role_accessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';

@InputType()
export class admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput {

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: Prisma.AtLeast<admin_role_accessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;

    @Field(() => admin_role_accessesCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => admin_role_accessesCreateWithoutAdmin_rolesInput)
    create!: admin_role_accessesCreateWithoutAdmin_rolesInput;
}
