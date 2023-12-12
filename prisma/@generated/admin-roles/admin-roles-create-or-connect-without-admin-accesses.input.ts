import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdmin_accessesInput } from './admin-roles-create-without-admin-accesses.input';

@InputType()
export class admin_rolesCreateOrConnectWithoutAdmin_accessesInput {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: Prisma.AtLeast<admin_rolesWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => admin_rolesCreateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdmin_accessesInput)
    create!: admin_rolesCreateWithoutAdmin_accessesInput;
}
