import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class admin_login_logsCreateManyInput {

    @Field(() => String, {nullable:true})
    login_id?: string;

    @Field(() => String, {nullable:false})
    admin_id_r!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;
}
