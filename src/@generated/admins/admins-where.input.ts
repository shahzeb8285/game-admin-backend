import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Admin_rolesRelationFilter } from '../prisma/admin-roles-relation-filter.input';
import { Admin_login_logsListRelationFilter } from '../prisma/admin-login-logs-list-relation-filter.input';
import { Manual_adjustmentsListRelationFilter } from '../prisma/manual-adjustments-list-relation-filter.input';
import { Transfer_out_transactionsListRelationFilter } from '../prisma/transfer-out-transactions-list-relation-filter.input';
import { Transfer_in_transactionsListRelationFilter } from '../prisma/transfer-in-transactions-list-relation-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';

@InputType()
export class adminsWhereInput {

    @Field(() => [adminsWhereInput], {nullable:true})
    AND?: Array<adminsWhereInput>;

    @Field(() => [adminsWhereInput], {nullable:true})
    OR?: Array<adminsWhereInput>;

    @Field(() => [adminsWhereInput], {nullable:true})
    NOT?: Array<adminsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    admin_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_password?: StringFilter;

    @Field(() => UuidFilter, {nullable:true})
    admin_role_id?: UuidFilter;

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

    @Field(() => Transfer_out_transactionsListRelationFilter, {nullable:true})
    transfer_out_transactions?: Transfer_out_transactionsListRelationFilter;

    @Field(() => Transfer_in_transactionsListRelationFilter, {nullable:true})
    transfer_in_transactions?: Transfer_in_transactionsListRelationFilter;

    @Field(() => Deposit_transactionsListRelationFilter, {nullable:true})
    deposit_transactions?: Deposit_transactionsListRelationFilter;

    @Field(() => Withdrawal_transactionsListRelationFilter, {nullable:true})
    withdrawal_transactions?: Withdrawal_transactionsListRelationFilter;
}
