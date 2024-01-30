import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_role_accessesUpdateManyMutationInput } from '../admin-role-accesses/admin-role-accesses-update-many-mutation.input';
import { Type } from 'class-transformer';
import { admin_role_accessesWhereInput } from '../admin-role-accesses/admin-role-accesses-where.input';

@ArgsType()
export class UpdateManyadminRoleAccessesArgs {

    @Field(() => admin_role_accessesUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateManyMutationInput)
    data!: admin_role_accessesUpdateManyMutationInput;

    @Field(() => admin_role_accessesWhereInput, {nullable:true})
    @Type(() => admin_role_accessesWhereInput)
    where?: admin_role_accessesWhereInput;
}
