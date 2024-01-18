import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesUncheckedUpdateManyInput } from '../admin-role-accesses/admin-role-accesses-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { admin_role_accessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';

@ArgsType()
export class UpdateManyadminRoleAccessesArgs {

    @Field(() => admin_role_accessesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => admin_role_accessesUncheckedUpdateManyInput)
    data!: admin_role_accessesUncheckedUpdateManyInput;

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    @Type(() => admin_role_accessesWhereInput)
    where?: admin_role_accessesWhereInput;
}
