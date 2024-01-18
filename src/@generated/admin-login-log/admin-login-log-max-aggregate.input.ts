import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminLoginLogMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    login_id?: true;

    @Field(() => Boolean, {nullable:true})
    admin_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    ip?: true;

    @Field(() => Boolean, {nullable:true})
    login_time?: true;
}
