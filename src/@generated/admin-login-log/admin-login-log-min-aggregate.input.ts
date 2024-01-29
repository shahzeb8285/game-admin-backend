import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminLoginLogMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_login_log_id?: true;

    @Field(() => Boolean, {nullable:true})
    admin_id?: true;

    @Field(() => Boolean, {nullable:true})
    ip?: true;

    @Field(() => Boolean, {nullable:true})
    login_time?: true;
}
