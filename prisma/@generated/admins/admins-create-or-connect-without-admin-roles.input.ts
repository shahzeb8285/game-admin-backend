import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { AdminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';

@InputType()
export class AdminsCreateOrConnectWithoutAdmin_rolesInput {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;

    @Field(() => AdminsCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminsCreateWithoutAdmin_rolesInput)
    create!: AdminsCreateWithoutAdmin_rolesInput;
}
