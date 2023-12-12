import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from './admin-roles-where.input';
import { Type } from 'class-transformer';
import { admin_rolesUpdateWithoutAdmin_accessesInput } from './admin-roles-update-without-admin-accesses.input';

@InputType()
export class admin_rolesUpdateToOneWithWhereWithoutAdmin_accessesInput {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;

    @Field(() => admin_rolesUpdateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutAdmin_accessesInput)
    data!: admin_rolesUpdateWithoutAdmin_accessesInput;
}
