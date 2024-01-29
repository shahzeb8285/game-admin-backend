import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Admin } from '../admin/admin.model';

@ObjectType()
export class AdminLoginLog {

    @Field(() => ID, {nullable:false})
    admin_login_log_id!: string;

    @Field(() => String, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => Admin, {nullable:false})
    admins?: Admin;
}
