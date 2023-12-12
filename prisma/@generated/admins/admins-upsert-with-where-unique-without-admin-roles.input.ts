import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutAdmin_rolesInput } from './admins-update-without-admin-roles.input';
import { adminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';

@InputType()
export class adminsUpsertWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => adminsUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => adminsUpdateWithoutAdmin_rolesInput)
    update!: adminsUpdateWithoutAdmin_rolesInput;

    @Field(() => adminsCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => adminsCreateWithoutAdmin_rolesInput)
    create!: adminsCreateWithoutAdmin_rolesInput;
}
