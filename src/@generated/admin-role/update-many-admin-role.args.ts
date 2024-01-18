import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleUpdateManyMutationInput } from './admin-role-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminRoleWhereInput } from './admin-role-where.input';

@ArgsType()
export class UpdateManyAdminRoleArgs {

    @Field(() => AdminRoleUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminRoleUpdateManyMutationInput)
    data!: AdminRoleUpdateManyMutationInput;

    @Field(() => AdminRoleWhereInput, {nullable:true})
    @Type(() => AdminRoleWhereInput)
    where?: AdminRoleWhereInput;
}
