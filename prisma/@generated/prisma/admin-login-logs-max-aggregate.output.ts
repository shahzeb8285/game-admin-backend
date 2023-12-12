import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Admin_login_logsMaxAggregate {

    @Field(() => String, {nullable:true})
    login_id?: string;

    @Field(() => String, {nullable:true})
    admin_id_r?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;
}
