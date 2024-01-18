import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminRoleAccessesUncheckedUpdateManyInput } from './admin-role-accesses-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesWhereInput } from './admin-role-accesses-where.input';

@ArgsType()
export class UpdateManyAdminRoleAccessesArgs {

    @Field(() => AdminRoleAccessesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => AdminRoleAccessesUncheckedUpdateManyInput)
    data!: AdminRoleAccessesUncheckedUpdateManyInput;

    @Field(() => AdminRoleAccessesWhereInput, {nullable:true})
    @Type(() => AdminRoleAccessesWhereInput)
    where?: AdminRoleAccessesWhereInput;
}
