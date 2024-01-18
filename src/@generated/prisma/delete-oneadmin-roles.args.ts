import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesWhereUniqueInput } from '../admin-roles/admin-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneadminRolesArgs {

    @Field(() => admin_rolesWhereUniqueInput, {nullable:false})
    @Type(() => admin_rolesWhereUniqueInput)
    where!: admin_rolesWhereUniqueInput;
}
