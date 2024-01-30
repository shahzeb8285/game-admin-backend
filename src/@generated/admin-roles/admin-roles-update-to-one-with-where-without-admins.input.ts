import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from './admin-roles-where.input';
import { Type } from 'class-transformer';
import { admin_rolesUpdateWithoutAdminsInput } from './admin-roles-update-without-admins.input';

@InputType()
export class admin_rolesUpdateToOneWithWhereWithoutAdminsInput {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;

    @Field(() => admin_rolesUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => admin_rolesUpdateWithoutAdminsInput)
    data!: admin_rolesUpdateWithoutAdminsInput;
}
