import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from './admin-roles-where.input';
import { Type } from 'class-transformer';
import { admin_rolesUpdateWithoutRole_accessesInput } from './admin-roles-update-without-role-accesses.input';

@InputType()
export class admin_rolesUpdateToOneWithWhereWithoutRole_accessesInput {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;

    @Field(() => admin_rolesUpdateWithoutRole_accessesInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutRole_accessesInput)
    data!: admin_rolesUpdateWithoutRole_accessesInput;
}
