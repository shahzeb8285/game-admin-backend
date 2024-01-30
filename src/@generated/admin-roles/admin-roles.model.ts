import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admins } from '../admins/admins.model';
import { admin_role_accesses } from '../admin-role-accesses/admin-role-accesses.model';
import { Admin_rolesCount } from '../prisma/admin-roles-count.output';

@ObjectType()
export class admin_roles {

    @Field(() => ID, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => [admins], {nullable:true})
    admins?: Array<admins>;

    @Field(() => [admin_role_accesses], {nullable:true})
    admin_role_accesses?: Array<admin_role_accesses>;

    @Field(() => Admin_rolesCount, {nullable:false})
    _count?: Admin_rolesCount;
}
