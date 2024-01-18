import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AdminRole } from '../admin-role/admin-role.model';
import { AdminLoginLog } from '../admin-login-log/admin-login-log.model';
import { ManualAdjustment } from '../manual-adjustment/manual-adjustment.model';
import { AdminCount } from './admin-count.output';

@ObjectType()
export class Admin {

    @Field(() => ID, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    @HideField()
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

    @Field(() => AdminRole, {nullable:false})
    admin_roles?: AdminRole;

    @Field(() => [AdminLoginLog], {nullable:true})
    admin_login_logs?: Array<AdminLoginLog>;

    @Field(() => [ManualAdjustment], {nullable:true})
    manual_adjustments?: Array<ManualAdjustment>;

    @Field(() => AdminCount, {nullable:false})
    _count?: AdminCount;
}
