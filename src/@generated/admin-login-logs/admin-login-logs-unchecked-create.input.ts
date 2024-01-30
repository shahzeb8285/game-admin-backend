import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_login_logsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    admin_login_log_id?: string;

    @Field(() => String, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;
}
