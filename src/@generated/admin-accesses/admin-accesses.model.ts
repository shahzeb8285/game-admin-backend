import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AdminRoleAccesses } from '../admin-role-accesses/admin-role-accesses.model';

@ObjectType()
export class AdminAccesses {

    @Field(() => ID, {nullable:false})
    admin_access_id!: string;

    @Field(() => String, {nullable:false})
    access_name!: string;

    @Field(() => [AdminRoleAccesses], {nullable:true})
    role_accesses?: Array<AdminRoleAccesses>;
}
