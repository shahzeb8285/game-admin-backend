import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutAdmin_rolesInput } from './admin-create-without-admin-roles.input';

@InputType()
export class AdminCreateOrConnectWithoutAdmin_rolesInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => AdminCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminCreateWithoutAdmin_rolesInput)
    create!: AdminCreateWithoutAdmin_rolesInput;
}
