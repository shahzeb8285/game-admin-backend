import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Admins } from '../admins/admins.model';
import { admin_role_accesses } from '../admin-role-accesses/admin-role-accesses.model';
import { Admin_rolesCount } from '../prisma/admin-roles-count.output';

@ObjectType()
export class admin_roles {

    @Field(() => ID, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => [Admins], {nullable:true})
    admins?: Array<Admins>;

    @Field(() => [admin_role_accesses], {nullable:true})
    role_accesses?: Array<admin_role_accesses>;

    @Field(() => Admin_rolesCount, {nullable:false})
    _count?: Admin_rolesCount;
}
