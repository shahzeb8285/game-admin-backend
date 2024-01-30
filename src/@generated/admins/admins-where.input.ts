import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Admin_rolesRelationFilter } from '../prisma/admin-roles-relation-filter.input';
import { Admin_login_logsListRelationFilter } from '../prisma/admin-login-logs-list-relation-filter.input';
import { Manual_adjustmentsListRelationFilter } from '../prisma/manual-adjustments-list-relation-filter.input';

@InputType()
export class adminsWhereInput {

    @Field(() => [adminsWhereInput], {nullable:true})
    AND?: Array<adminsWhereInput>;

    @Field(() => [adminsWhereInput], {nullable:true})
    OR?: Array<adminsWhereInput>;

    @Field(() => [adminsWhereInput], {nullable:true})
    NOT?: Array<adminsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => Admin_rolesRelationFilter, {nullable:true})
    admin_roles?: Admin_rolesRelationFilter;

    @Field(() => Admin_login_logsListRelationFilter, {nullable:true})
    admin_login_logs?: Admin_login_logsListRelationFilter;

    @Field(() => Manual_adjustmentsListRelationFilter, {nullable:true})
    manual_adjustments?: Manual_adjustmentsListRelationFilter;
}
