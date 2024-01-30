import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateWithoutAdminsInput } from './admin-roles-update-without-admins.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdminsInput } from './admin-roles-create-without-admins.input';
import { admin_rolesWhereInput } from './admin-roles-where.input';

@InputType()
export class admin_rolesUpsertWithoutAdminsInput {

    @Field(() => admin_rolesUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutAdminsInput)
    update!: admin_rolesUpdateWithoutAdminsInput;

    @Field(() => admin_rolesCreateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdminsInput)
    create!: admin_rolesCreateWithoutAdminsInput;

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;
}
