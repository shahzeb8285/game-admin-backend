import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutAdmin_rolesInput } from './admin-create-without-admin-roles.input';

@InputType()
export class AdminCreateOrConnectWithoutAdmin_rolesInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateWithoutAdmin_rolesInput, {nullable:false})
    @Type(() => AdminCreateWithoutAdmin_rolesInput)
    create!: AdminCreateWithoutAdmin_rolesInput;
}
