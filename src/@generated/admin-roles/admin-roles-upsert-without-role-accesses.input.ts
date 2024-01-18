import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateWithoutRole_accessesInput } from './admin-roles-update-without-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutRole_accessesInput } from './admin-roles-create-without-role-accesses.input';
import { admin_rolesWhereInput } from './admin-roles-where.input';

@InputType()
export class admin_rolesUpsertWithoutRole_accessesInput {

    @Field(() => admin_rolesUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutRole_accessesInput)
    update!: admin_rolesUpdateWithoutRole_accessesInput;

    @Field(() => admin_rolesCreateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutRole_accessesInput)
    create!: admin_rolesCreateWithoutRole_accessesInput;

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;
}
