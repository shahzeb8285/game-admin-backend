import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesUpdateWithoutAdmin_accessesInput } from './admin-roles-update-without-admin-accesses.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateWithoutAdmin_accessesInput } from './admin-roles-create-without-admin-accesses.input';
import { admin_rolesWhereInput } from './admin-roles-where.input';

@InputType()
export class admin_rolesUpsertWithoutAdmin_accessesInput {

    @Field(() => admin_rolesUpdateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutAdmin_accessesInput)
    update!: admin_rolesUpdateWithoutAdmin_accessesInput;

    @Field(() => admin_rolesCreateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => admin_rolesCreateWithoutAdmin_accessesInput)
    create!: admin_rolesCreateWithoutAdmin_accessesInput;

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;
}
