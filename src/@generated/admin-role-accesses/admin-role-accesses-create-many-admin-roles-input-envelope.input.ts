import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateManyAdmin_rolesInput } from './admin-role-accesses-create-many-admin-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class admin_role_accessesCreateManyAdmin_rolesInputEnvelope {

    @Field(() => [admin_role_accessesCreateManyAdmin_rolesInput], {nullable:false})
    @Type(() => admin_role_accessesCreateManyAdmin_rolesInput)
    data!: Array<admin_role_accessesCreateManyAdmin_rolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
