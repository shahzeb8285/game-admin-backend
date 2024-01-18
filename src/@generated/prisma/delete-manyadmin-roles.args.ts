import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from '../admin-roles/admin-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyadminRolesArgs {

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;
}
