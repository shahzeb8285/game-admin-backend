import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_id?: true;

    @Field(() => Boolean, {nullable:true})
    admin_name?: true;

    @Field(() => Boolean, {nullable:true})
    admin_password?: true;

    @Field(() => Boolean, {nullable:true})
    admin_role_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    udate?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;
}
