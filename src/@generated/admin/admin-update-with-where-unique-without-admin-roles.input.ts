import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminUpdateWithoutAdmin_rolesInput } from './admin-update-without-admin-roles.input';

@InputType()
export class AdminUpdateWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: AdminWhereUniqueInput;

    @Field(() => AdminUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminUpdateWithoutAdmin_rolesInput)
    data!: AdminUpdateWithoutAdmin_rolesInput;
}
