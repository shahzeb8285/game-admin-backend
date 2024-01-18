import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_role_accessesUpdateWithoutAdmin_rolesInput } from './admin-role-accesses-update-without-admin-roles.input';
import { admin_role_accessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';

@InputType()
export class admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: admin_role_accessesWhereUniqueInput;

    @Field(() => admin_role_accessesUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateWithoutAdmin_rolesInput)
    update!: admin_role_accessesUpdateWithoutAdmin_rolesInput;

    @Field(() => admin_role_accessesCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => admin_role_accessesCreateWithoutAdmin_rolesInput)
    create!: admin_role_accessesCreateWithoutAdmin_rolesInput;
}
