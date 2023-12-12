import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesUpdateInput } from '../admin-role-accesses/admin-role-accesses-update.input';
import { Type } from 'class-transformer';
import { admin_role_accessesWhereUniqueInput } from '../admin-role-accesses/admin-role-accesses-where-unique.input';

@ArgsType()
export class UpdateOneadminRoleAccessesArgs {

    @Field(() => admin_role_accessesUpdateInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateInput)
    data!: admin_role_accessesUpdateInput;

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: admin_role_accessesWhereUniqueInput;
}
