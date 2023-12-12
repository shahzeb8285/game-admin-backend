import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_rolesWhereInput } from './admin-roles-where.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AdminsListRelationFilter } from '../prisma/admins-list-relation-filter.input';
import { Admin_role_accessesListRelationFilter } from '../prisma/admin-role-accesses-list-relation-filter.input';

@InputType()
export class admin_rolesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    admin_role_id?: string;

    @Field(() => String, {nullable:true})
    admin_role_name?: string;

    @Field(() => [admin_rolesWhereInput], {nullable:true})
    AND?: Array<admin_rolesWhereInput>;

    @Field(() => [admin_rolesWhereInput], {nullable:true})
    OR?: Array<admin_rolesWhereInput>;

    @Field(() => [admin_rolesWhereInput], {nullable:true})
    NOT?: Array<admin_rolesWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AdminsListRelationFilter, {nullable:true})
    admins?: AdminsListRelationFilter;

    @Field(() => Admin_role_accessesListRelationFilter, {nullable:true})
    admin_accesses?: Admin_role_accessesListRelationFilter;
}
