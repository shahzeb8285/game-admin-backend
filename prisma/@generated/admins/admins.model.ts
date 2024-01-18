import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admin_roles } from '../admin-roles/admin-roles.model';
import { admin_login_logs } from '../admin-login-logs/admin-login-logs.model';
import { manual_adjustments } from '../manual-adjustments/manual-adjustments.model';
import { AdminsCount } from './admins-count.output';

@ObjectType()
export class Admins {

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

    @Field(() => AdminsCount, {nullable:false})
    _count?: AdminsCount;
}
