import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AdminRoleRelationFilter } from '../admin-role/admin-role-relation-filter.input';
import { AdminLoginLogListRelationFilter } from '../admin-login-log/admin-login-log-list-relation-filter.input';
import { ManualAdjustmentListRelationFilter } from '../manual-adjustment/manual-adjustment-list-relation-filter.input';

@InputType()
export class AdminWhereInput {

    @Field(() => [AdminWhereInput], {nullable:true})
    AND?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    OR?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    NOT?: Array<AdminWhereInput>;

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

    @Field(() => AdminRoleRelationFilter, {nullable:true})
    admin_roles?: AdminRoleRelationFilter;

    @Field(() => AdminLoginLogListRelationFilter, {nullable:true})
    admin_login_logs?: AdminLoginLogListRelationFilter;

    @Field(() => ManualAdjustmentListRelationFilter, {nullable:true})
    manual_adjustments?: ManualAdjustmentListRelationFilter;
}
