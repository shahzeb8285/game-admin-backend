import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateInput } from './admin-role-accesses-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminRoleAccessesArgs {

    @Field(() => AdminRoleAccessesCreateInput, {nullable:false})
    @Type(() => AdminRoleAccessesCreateInput)
    data!: AdminRoleAccessesCreateInput;
}
