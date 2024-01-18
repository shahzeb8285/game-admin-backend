import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Admin } from '../admin/admin.model';
import { AdminRoleAccesses } from '../admin-role-accesses/admin-role-accesses.model';
import { AdminRoleCount } from './admin-role-count.output';

@ObjectType()
export class AdminRole {

    @Field(() => ID, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => [Admin], {nullable:true})
    admins?: Array<Admin>;

    @Field(() => [AdminRoleAccesses], {nullable:true})
    role_accesses?: Array<AdminRoleAccesses>;

    @Field(() => AdminRoleCount, {nullable:false})
    _count?: AdminRoleCount;
}
