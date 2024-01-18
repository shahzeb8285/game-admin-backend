import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminRole } from '../admin-role/admin-role.model';
import { AdminAccesses } from '../admin-accesses/admin-accesses.model';

@ObjectType()
export class AdminRoleAccesses {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_access_id!: string;

    @Field(() => AdminRole, {nullable:false})
    admin_roles?: AdminRole;

    @Field(() => AdminAccesses, {nullable:false})
    admin_accesses?: AdminAccesses;
}
