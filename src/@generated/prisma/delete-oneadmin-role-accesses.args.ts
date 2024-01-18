import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesWhereUniqueInput } from '../admin-role-accesses/admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneadminRoleAccessesArgs {

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: admin_role_accessesWhereUniqueInput;
}
