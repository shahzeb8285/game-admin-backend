import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admins } from '../admins/admins.model';

@ObjectType()
export class admin_login_logs {

    @Field(() => ID, {nullable:false})
    admin_login_log_id!: string;

    @Field(() => String, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => admins, {nullable:false})
    admins?: admins;
}
