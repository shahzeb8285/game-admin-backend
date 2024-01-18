import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesUpdateWithoutAdmin_rolesInput } from './admin-role-accesses-update-without-admin-roles.input';

@InputType()
export class AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: AdminRoleAccessesWhereUniqueInput;

    @Field(() => AdminRoleAccessesUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminRoleAccessesUpdateWithoutAdmin_rolesInput)
    data!: AdminRoleAccessesUpdateWithoutAdmin_rolesInput;
}
