import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesCreateInput } from '../admin-role-accesses/admin-role-accesses-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneadminRoleAccessesArgs {

    @Field(() => admin_role_accessesCreateInput, {nullable:false})
    @Type(() => admin_role_accessesCreateInput)
    data!: admin_role_accessesCreateInput;
}
