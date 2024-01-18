import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleAccessesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_role_id?: true;

    @Field(() => Boolean, {nullable:true})
    admin_access_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}