import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesUpdateManyMutationInput } from '../admin-roles/admin-roles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { admin_rolesWhereInput } from '../admin-roles/admin-roles-where.input';

@ArgsType()
export class UpdateManyadminRolesArgs {

    @Field(() => admin_rolesUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_rolesUpdateManyMutationInput)
    data!: admin_rolesUpdateManyMutationInput;

    @Field(() => admin_rolesWhereInput, {nullable:true})
    @Type(() => admin_rolesWhereInput)
    where?: admin_rolesWhereInput;
}
