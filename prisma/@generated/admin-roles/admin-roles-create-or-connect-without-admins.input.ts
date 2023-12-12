import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdminsInput } from './admin-roles-create-without-admins.input';

@InputType()
export class admin_rolesCreateOrConnectWithoutAdminsInput {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: Prisma.AtLeast<admin_rolesWhereUniqueInput, 'admin_role_id' | 'admin_role_name'>;

    @Field(() => admin_rolesCreateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdminsInput)
    create!: admin_rolesCreateWithoutAdminsInput;
}
