import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { admins } from '../admins/admins.model';

@ObjectType()
export class admin_login_logs {

    @Field(() => ID, {nullable:false})
    login_id!: string;

    @Field(() => String, {nullable:false})
    admin_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => admins, {nullable:false})
    admins?: admins;
}
