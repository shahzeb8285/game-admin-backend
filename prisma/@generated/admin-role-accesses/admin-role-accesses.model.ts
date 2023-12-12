import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { admin_roles } from '../admin-roles/admin-roles.model';
import { admin_accesses } from '../admin-accesses/admin-accesses.model';

@ObjectType()
export class admin_role_accesses {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_access_id!: string;

    @Field(() => admin_roles, {nullable:false})
    admin_roles?: admin_roles;

    @Field(() => admin_accesses, {nullable:false})
    admin_accesses?: admin_accesses;
}
