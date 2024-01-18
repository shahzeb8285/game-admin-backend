import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateWithoutAdmin_accessesInput } from './admin-role-accesses-create-without-admin-accesses.input';

@InputType()
export class AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput {

    @Field(() => AdminRoleAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    where!: AdminRoleAccessesWhereUniqueInput;

    @Field(() => AdminRoleAccessesCreateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_accessesInput)
    create!: AdminRoleAccessesCreateWithoutAdmin_accessesInput;
}
