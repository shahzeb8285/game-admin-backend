import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutAdmin_rolesInput } from './admins-update-without-admin-roles.input';

@InputType()
export class adminsUpdateWithWhereUniqueWithoutAdmin_rolesInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsUpdateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => adminsUpdateWithoutAdmin_rolesInput)
    data!: adminsUpdateWithoutAdmin_rolesInput;
}
