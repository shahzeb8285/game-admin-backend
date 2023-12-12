import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesUpdateInput } from '../admin-roles/admin-roles-update.input';
import { Type } from 'class-transformer';
import { admin_rolesWhereUniqueInput } from '../admin-roles/admin-roles-where-unique.input';

@ArgsType()
export class UpdateOneadminRolesArgs {

    @Field(() => admin_rolesUpdateInput, {nullable:false})
    @Type(() => admin_rolesUpdateInput)
    data!: admin_rolesUpdateInput;

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: admin_rolesWhereUniqueInput;
}
