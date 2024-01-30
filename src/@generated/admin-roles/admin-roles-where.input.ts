import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AdminsListRelationFilter } from '../prisma/admins-list-relation-filter.input';
import { Admin_role_accessesListRelationFilter } from '../prisma/admin-role-accesses-list-relation-filter.input';

@InputType()
export class admin_rolesWhereInput {

    @Field(() => [admin_rolesWhereInput], {nullable:true})
    AND?: Array<admin_rolesWhereInput>;

    @Field(() => [admin_rolesWhereInput], {nullable:true})
    OR?: Array<admin_rolesWhereInput>;

    @Field(() => [admin_rolesWhereInput], {nullable:true})
    NOT?: Array<admin_rolesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_role_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AdminsListRelationFilter, {nullable:true})
    admins?: AdminsListRelationFilter;

    @Field(() => Admin_role_accessesListRelationFilter, {nullable:true})
    admin_role_accesses?: Admin_role_accessesListRelationFilter;
}
