import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';

@InputType()
export class adminsCreateOrConnectWithoutAdmin_rolesInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => adminsCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => adminsCreateWithoutAdmin_rolesInput)
    create!: adminsCreateWithoutAdmin_rolesInput;
}
