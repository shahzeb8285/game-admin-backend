import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { AdminsUpdateWithoutAdmin_rolesInput } from './admins-update-without-admin-roles.input';
import { AdminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';

@InputType()
export class AdminsUpsertWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;

    @Field(() => AdminsUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminsUpdateWithoutAdmin_rolesInput)
    update!: AdminsUpdateWithoutAdmin_rolesInput;

    @Field(() => AdminsCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminsCreateWithoutAdmin_rolesInput)
    create!: AdminsCreateWithoutAdmin_rolesInput;
}
