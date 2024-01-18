import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereUniqueInput } from './admin-roles-where-unique.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdminsInput } from './admin-roles-create-without-admins.input';

@InputType()
export class admin_rolesCreateOrConnectWithoutAdminsInput {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: admin_rolesWhereUniqueInput;

    @Field(() => admin_rolesCreateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdminsInput)
    create!: admin_rolesCreateWithoutAdminsInput;
}
