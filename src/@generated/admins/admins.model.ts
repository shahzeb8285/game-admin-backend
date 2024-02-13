import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admin_roles } from '../admin-roles/admin-roles.model';
import { admin_login_logs } from '../admin-login-logs/admin-login-logs.model';
import { manual_adjustments } from '../manual-adjustments/manual-adjustments.model';
import { transfer_out_transactions } from '../transfer-out-transactions/transfer-out-transactions.model';
import { transfer_in_transactions } from '../transfer-in-transactions/transfer-in-transactions.model';
import { deposit_transactions } from '../deposit-transactions/deposit-transactions.model';
import { withdrawal_transactions } from '../withdrawal-transactions/withdrawal-transactions.model';
import { AdminsCount } from '../prisma/admins-count.output';

@ObjectType()
export class admins {

    @Field(() => ID, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    @Field(() => String, {nullable:false})
    admin_password!: string;

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => admin_roles, {nullable:false})
    admin_roles?: admin_roles;

    @Field(() => [admin_login_logs], {nullable:true})
    admin_login_logs?: Array<admin_login_logs>;

    @Field(() => [manual_adjustments], {nullable:true})
    manual_adjustments?: Array<manual_adjustments>;

    @Field(() => [transfer_out_transactions], {nullable:true})
    transfer_out_transactions?: Array<transfer_out_transactions>;

    @Field(() => [transfer_in_transactions], {nullable:true})
    transfer_in_transactions?: Array<transfer_in_transactions>;

    @Field(() => [deposit_transactions], {nullable:true})
    deposit_transactions?: Array<deposit_transactions>;

    @Field(() => [withdrawal_transactions], {nullable:true})
    withdrawal_transactions?: Array<withdrawal_transactions>;

    @Field(() => AdminsCount, {nullable:false})
    _count?: AdminsCount;
}
