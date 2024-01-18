import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminRoleMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_role_id?: true;

    @Field(() => Boolean, {nullable:true})
    admin_role_name?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;
}
