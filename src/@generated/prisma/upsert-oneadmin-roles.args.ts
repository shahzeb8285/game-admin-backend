import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesWhereUniqueInput } from '../admin-roles/admin-roles-where-unique.input';
import { Type } from 'class-transformer';
import { admin_rolesCreateInput } from '../admin-roles/admin-roles-create.input';
import { admin_rolesUpdateInput } from '../admin-roles/admin-roles-update.input';

@ArgsType()
export class UpsertOneadminRolesArgs {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: admin_rolesWhereUniqueInput;

    @Field(() => admin_rolesCreateInput, {nullable:false})
    @Type(() => admin_rolesCreateInput)
    create!: admin_rolesCreateInput;

    @Field(() => admin_rolesUpdateInput, {nullable:false})
    @Type(() => admin_rolesUpdateInput)
    update!: admin_rolesUpdateInput;
}
