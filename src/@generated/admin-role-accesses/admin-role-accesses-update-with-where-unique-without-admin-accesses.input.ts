import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesUpdateWithoutAdmin_accessesInput } from './admin-role-accesses-update-without-admin-accesses.input';

@InputType()
export class AdminRoleAccessesUpdateWithWhereUniqueWithoutAdmin_accessesInput {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: AdminRoleAccessesWhereUniqueInput;

    @Field(() => AdminRoleAccessesUpdateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => AdminRoleAccessesUpdateWithoutAdmin_accessesInput)
    data!: AdminRoleAccessesUpdateWithoutAdmin_accessesInput;
}
