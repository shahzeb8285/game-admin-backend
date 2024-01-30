import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_login_logsUpdateWithoutAdminsInput {

    @Field(() => String, {nullable:true})
    admin_login_log_id?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;
}
