import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_role_id?: true;

    @Field(() => Boolean, {nullable:true})
    admin_role_name?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
