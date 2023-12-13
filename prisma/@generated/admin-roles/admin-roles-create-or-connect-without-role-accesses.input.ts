import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutRole_accessesInput } from './admin-roles-create-without-role-accesses.input';

@InputType()
export class admin_rolesCreateOrConnectWithoutRole_accessesInput {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: Prisma.AtLeast<admin_rolesWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => admin_rolesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutRole_accessesInput)
    create!: admin_rolesCreateWithoutRole_accessesInput;
}
