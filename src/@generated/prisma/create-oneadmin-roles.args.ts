import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesCreateInput } from '../admin-roles/admin-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneadminRolesArgs {

    @Field(() => admin_rolesCreateInput, {nullable:false})
    @Type(() => admin_rolesCreateInput)
    data!: admin_rolesCreateInput;
}
