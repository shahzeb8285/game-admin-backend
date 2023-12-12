import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesWhereUniqueInput } from '../admin-role-accesses/admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_role_accessesCreateInput } from '../admin-role-accesses/admin-role-accesses-create.input';
import { admin_role_accessesUpdateInput } from '../admin-role-accesses/admin-role-accesses-update.input';

@ArgsType()
export class UpsertOneadminRoleAccessesArgs {

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: admin_role_accessesWhereUniqueInput;

    @Field(() => admin_role_accessesCreateInput, {nullable:false})
    @Type(() => admin_role_accessesCreateInput)
    create!: admin_role_accessesCreateInput;

    @Field(() => admin_role_accessesUpdateInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateInput)
    update!: admin_role_accessesUpdateInput;
}
