import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateManyAdmin_rolesInput } from './admin-role-accesses-create-many-admin-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminRoleAccessesCreateManyAdmin_rolesInputEnvelope {

    @Field(() => [AdminRoleAccessesCreateManyAdmin_rolesInput], {nullable:false})
    @Type(() => AdminRoleAccessesCreateManyAdmin_rolesInput)
    data!: Array<AdminRoleAccessesCreateManyAdmin_rolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
