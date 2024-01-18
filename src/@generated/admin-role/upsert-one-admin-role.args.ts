import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleWhereUniqueInput } from './admin-role-where-unique.input';
import { Type } from 'class-transformer';
import { AdminRoleCreateInput } from './admin-role-create.input';
import { AdminRoleUpdateInput } from './admin-role-update.input';

@ArgsType()
export class UpsertOneAdminRoleArgs {

    @Field(() => AdminRoleWhereUniqueInput, {nullable:false})
    @Type(() => AdminRoleWhereUniqueInput)
    where!: AdminRoleWhereUniqueInput;

    @Field(() => AdminRoleCreateInput, {nullable:false})
    @Type(() => AdminRoleCreateInput)
    create!: AdminRoleCreateInput;

    @Field(() => AdminRoleUpdateInput, {nullable:false})
    @Type(() => AdminRoleUpdateInput)
    update!: AdminRoleUpdateInput;
}
