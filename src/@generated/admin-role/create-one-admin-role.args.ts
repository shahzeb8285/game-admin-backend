import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleCreateInput } from './admin-role-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminRoleArgs {

    @Field(() => AdminRoleCreateInput, {nullable:false})
    @Type(() => AdminRoleCreateInput)
    data!: AdminRoleCreateInput;
}
