import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminUpdateWithoutAdmin_rolesInput } from './admin-update-without-admin-roles.input';

@InputType()
export class AdminUpdateWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => AdminUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminUpdateWithoutAdmin_rolesInput)
    data!: AdminUpdateWithoutAdmin_rolesInput;
}
