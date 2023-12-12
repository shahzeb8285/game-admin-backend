import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_role_accessesUpdateWithoutAdmin_rolesInput } from './admin-role-accesses-update-without-admin-roles.input';

@InputType()
export class admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: Prisma.AtLeast<admin_role_accessesWhereUniqueInput, 'admin_role_id_admin_access_id'>;

    @Field(() => admin_role_accessesUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateWithoutAdmin_rolesInput)
    data!: admin_role_accessesUpdateWithoutAdmin_rolesInput;
}
