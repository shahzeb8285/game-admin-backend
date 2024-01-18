import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { AdminsUpdateWithoutAdmin_rolesInput } from './admins-update-without-admin-roles.input';

@InputType()
export class AdminsUpdateWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;

    @Field(() => AdminsUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminsUpdateWithoutAdmin_rolesInput)
    data!: AdminsUpdateWithoutAdmin_rolesInput;
}
